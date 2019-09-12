using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using WEBAPICORE_2._2_PAGOS.Models;
using Newtonsoft.Json.Serialization;

namespace WEBAPICORE_2._2_PAGOS
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc()
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
                .AddJsonOptions(Options=> {
                    //Se anula que la serialización de keys( keys son las propiedades de una clase) de json convierta las primeras letras 
                    //en minuscula para que sea igual al de la clase.
                    var resolver = Options.SerializerSettings.ContractResolver;
                    if (resolver != null)
                    {
                        (resolver as DefaultContractResolver).NamingStrategy = null;
                    }
                        
                });;
            services.AddDbContext<PagosDBContext>(options => options.UseSqlServer(Configuration.GetConnectionString("PagosConnection")));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
