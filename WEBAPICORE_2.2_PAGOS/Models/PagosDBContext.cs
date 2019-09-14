using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WEBAPICORE_2._2_PAGOS.Models
{
    public class PagosDBContext:DbContext
    {
        
        public PagosDBContext(DbContextOptions<PagosDBContext> options) : base(options)
        {
        }
        public DbSet<PagoDetalle> PagoDetalle { get; set; }

    }
}
