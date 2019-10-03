using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WEBAPICORE_2._2_USUARIOS.Models;

namespace WEBAPICORE_2._2_USUARIOS.Data
{
    public class ApplicationDbContext: IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            //modelBuilder.Seed();
        }

        public DbSet<WEBAPICORE_2._2_USUARIOS.Models.UsuariosViewModel> UsuariosViewModel { get; set; }
    }
}
