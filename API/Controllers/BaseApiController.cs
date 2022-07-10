using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")] //[controller] is placeholder, replaced with class name minus controller
    public class BaseApiController : ControllerBase
    {
        
    }
}