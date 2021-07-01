using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using Google.Protobuf;
using Terminology.Interface;
using Valuesets;

namespace Terminology.Services
{
    public class ValueSetDapperRepository : IValueSetRepository
    {
        private IDbConnection db;
        private ICodeRepository cr;
        public ValueSetDapperRepository(IDbConnection connstring)
        {
            db = connstring;
            cr = CreateRepository(connstring);
        }

        private ICodeRepository CreateRepository(IDbConnection connstring)
        {
            return new CodeDapperRepository(connstring);
        }

        public AllValueSetinfoProvide FindValueSet(ValueSetURIVersionProvide vsvp)
        {
            var sql = @"SELECT * FROM ValueSet
                        WHERE ValueSetURI LIKE @valuesetURI AND VersionNumber LIKE @versionNumber";
            var response = db.Query<AllValueSetinfoProvide>(sql, new
            { valuesetURI = "%" + vsvp.ValuesetURI + "%", versionNumber = "%" + vsvp.VersionNumber + "%" }).FirstOrDefault();
            return response;
        }

        public AllValueSetinfoProvide AddValueSet(AllValueSetinfoProvide vsvp)
        {
            ValueSetURIVersionProvide valueseturiprovide = new() { ValuesetURI = vsvp.ValuesetURI, VersionNumber = vsvp.VersionNumber };
            var findresponse = FindValueSet(valueseturiprovide);
            if (findresponse == null)
            {
                var sql = @"INSERT INTO [ValueSet]
					    ([ValueSetURI]
                        ,[VersionNumber]
                        ,[ValueSetHashID]
                        ,[Name]
                        ,[Description])
                        VALUES(@valuesetURI,@versionNumber,HASHBYTES('SHA2_512', UPPER(CONCAT(@valuesetURI,':',@versionNumber))),@name,@description)";
                db.Execute(sql, new
                {
                    valuesetURI = vsvp.ValuesetURI,
                    versionNumber = vsvp.VersionNumber,
                    name = vsvp.Name,
                    description = vsvp.Description
                });
            }
            //I have VALUESETHASHID
            for (var i = 0; i < vsvp.Codes.Count; i++)
            {
                var code = vsvp.Codes.ElementAt(i);
                var mycode = cr.FindCode
                    (new Codes.CodeProvide { CodeID = code.CodeID, CodesystemURI = code.CodesystemURI });
                if (!mycode.Items.Any())
                {
                    var response = cr.AddCode(code);
                    vsvp.Codes.ElementAt(i).CodeID = response.CodeID;
                    vsvp.Codes.ElementAt(i).CodesystemURI = response.CodesystemURI;
                    vsvp.Codes.ElementAt(i).Name = response.Name;
                    vsvp.Codes.ElementAt(i).Description = response.Description;
                }
                if (vsvp.Codes.ElementAt(i).CodeID != "")
                    AddInValueSetMember(vsvp, vsvp.Codes.ElementAt(i));
                //TODO-Improve Insert and Update Query
                //I have CODEHASHID also
            }
            return vsvp;
        }

        private bool AddInValueSetMember(AllValueSetinfoProvide avsip, Codes.InfoProvide code)
        {

            var sql = @"INSERT INTO ValueSetMember
                      ([ValueSetHashID]
                        ,[CodeHashID])
                       VALUES(HASHBYTES('SHA2_512', UPPER(CONCAT(@valuesetURI,':',@versionNumber))),HASHBYTES('SHA2_512', UPPER(CONCAT(@codeID,':',@codesystemURI))))";
            try
            {
                db.Execute(sql, new
                {
                    valuesetURI = avsip.ValuesetURI,
                    versionNumber = avsip.VersionNumber,
                    codeID = code.CodeID,
                    codesystemURI = code.CodesystemURI
                });
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public ValueSetToCodes FindCodesFromValueSet(ValueSetURIVersionProvide vsvp)
        {
            var sql = @"SELECT * From Code where CodehashID IN 
                                (Select CodehashID from ValueSetMember where ValueSetHashID IN
                                (Select ValueSetHashID from ValueSet where ValueSetHashID=
                        HASHBYTES('SHA2_512',UPPER(CONCAT(@valuesetURI,':',@versionNumber)))))";
            ValueSetToCodes response = new();
            response.ValuesetURI = vsvp.ValuesetURI;
            response.VersionNumber = vsvp.VersionNumber;
            var codes = db.Query<Codes.InfoProvide>
                (sql, new { valuesetURI = vsvp.ValuesetURI, versionNumber = vsvp.VersionNumber });
            response.Codes.AddRange(codes);
            return response;
        }
    }
}
