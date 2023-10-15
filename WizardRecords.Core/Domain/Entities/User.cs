using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Core.Domain.Entities {
    public class User : IdentityUser<Guid> {
        public User(string userName) : base(userName) { }
        internal User()
        {
            
        }
    }
}
