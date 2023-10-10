using Microsoft.AspNetCore.Mvc;
using WizardRecords.Dtos;
using WizardRecords.Repositories;

namespace WizardRecords.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class LabelController : ControllerBase {
        private readonly ILabelRepository _labelRepository;

        public LabelController(ILabelRepository labelRepository) {
            _labelRepository = labelRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<LabelDetails>>> GetAllLabels() {
            var labels = (await _labelRepository.GetAllLabelsAsync()).Select(l => new LabelDetails(l.LabelId, l.Name, l.Country));
            return Ok(labels);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<LabelDetails>> GetLabelById(Guid id) {
            try {
                var label = await _labelRepository.GetLabelByIdAsync(id);

                if (label != null) {
                    return Ok(new LabelDetails(label.LabelId, label.Name, label.Country));
                }
                else {
                    return NotFound($"Label with ID {id} not found.");
                }
            }
            catch (Exception ex) {
                return Problem($"An error occurred while fetching the label: {ex.Message}");
            }
        }
    }
}
