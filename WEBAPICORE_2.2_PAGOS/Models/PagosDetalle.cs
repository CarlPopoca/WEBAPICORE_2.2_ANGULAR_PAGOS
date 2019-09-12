using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WEBAPICORE_2._2_PAGOS.Models
{
    public class PagosDetalle
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName="nvarchar(100)")]
        public string PropietarioTarjeta { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(16)")]
        public string NumeroTarjeta { get; set; }
        // MM/YY
        [Required]
        [Column(TypeName = "nvarchar(5)")]
        public string FechaExpiracion { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(3)")]
        public string CVV { get; set; }
    }
}
