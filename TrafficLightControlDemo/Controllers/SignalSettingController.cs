using System.Web.Http;
using TrafficLightControlDemo.Models;

namespace TrafficLightControlDemo.Controllers
{
    public class SignalSettingController : ApiController
    {
        // GET api/<controller>
        public SignalSetting Get()
        {
            return StaticData.StaticData.SignalSetting;
        }

        // GET api/<controller>
        public void Save(SignalSetting signal)
        {
            try
            {
                //below would be point to DB
                var currentSignalSetting = StaticData.StaticData.SignalSetting;
                currentSignalSetting.DefaultInterval = signal.DefaultInterval;
            }
            catch (System.Exception e)
            {
                //Log the error
                throw;
            }
            
        }
    }
}