using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ClassBookingSystem.Controllers
{
    public class ClassBookingController : Controller
    {
        // GET: ClassBooking
        public ActionResult Index()
        {
            return View();
        }
    }
}