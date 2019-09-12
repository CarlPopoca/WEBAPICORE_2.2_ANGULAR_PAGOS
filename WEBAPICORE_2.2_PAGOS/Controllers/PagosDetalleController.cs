using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WEBAPICORE_2._2_PAGOS.Models;

namespace WEBAPICORE_2._2_PAGOS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PagosDetalleController : ControllerBase
    {
        private readonly PagosDBContext _context;

        public PagosDetalleController(PagosDBContext context)
        {
            _context = context;
        }

        // GET: api/PagosDetalle
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PagosDetalle>>> GetPagosDetalles()
        {
            return await _context.PagosDetalles.ToListAsync();
        }

        // GET: api/PagosDetalle/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PagosDetalle>> GetPagosDetalle(int id)
        {
            var pagosDetalle = await _context.PagosDetalles.FindAsync(id);

            if (pagosDetalle == null)
            {
                return NotFound();
            }

            return pagosDetalle;
        }

        // PUT: api/PagosDetalle/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPagosDetalle(int id, PagosDetalle pagosDetalle)
        {
            if (id != pagosDetalle.Id)
            {
                return BadRequest();
            }

            _context.Entry(pagosDetalle).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PagosDetalleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/PagosDetalle
        [HttpPost]
        public async Task<ActionResult<PagosDetalle>> PostPagosDetalle(PagosDetalle pagosDetalle)
        {
            _context.PagosDetalles.Add(pagosDetalle);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPagosDetalle", new { id = pagosDetalle.Id }, pagosDetalle);
        }

        // DELETE: api/PagosDetalle/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PagosDetalle>> DeletePagosDetalle(int id)
        {
            var pagosDetalle = await _context.PagosDetalles.FindAsync(id);
            if (pagosDetalle == null)
            {
                return NotFound();
            }

            _context.PagosDetalles.Remove(pagosDetalle);
            await _context.SaveChangesAsync();

            return pagosDetalle;
        }

        private bool PagosDetalleExists(int id)
        {
            return _context.PagosDetalles.Any(e => e.Id == id);
        }
    }
}
