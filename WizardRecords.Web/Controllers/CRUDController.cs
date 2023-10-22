using Microsoft.AspNetCore.Mvc;
using WizardRecords.Repositories;
using WizardRecords.Web.Dtos;

namespace WizardRecords.Web.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class CRUDController : ControllerBase {
        private readonly IAlbumRepository _albumRepository;

        public CRUDController(IAlbumRepository albumRepository) {
            _albumRepository = albumRepository;
        }

        [HttpPut("update/{id}")]
        public async Task<ActionResult<AlbumUpdate>> UpdateAlbum(Guid id, [FromBody] AlbumUpdate updatedAlbum) {
            try {
                var album = await _albumRepository.GetAlbumByIdAsync(id);
                if (album != null) {
                    album.Title = updatedAlbum.Title;
                    album.Quantity = updatedAlbum.Quantity;
                    album.Price = updatedAlbum.Price;
                    album.Comments = updatedAlbum.Comments;
                    album.ImageFilePath = updatedAlbum.ImageFilePath; // Change outside of Detail.jsx
                  
                    await _albumRepository.UpdateAlbumAsync(id, album);
                    return Ok();
                }
                else {
                    return NotFound();
                }
            }
            catch (Exception) {
                return StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }

        [HttpDelete("delete/{id}")]
        public async Task<ActionResult<AlbumDelete>> DeleteAlbum(Guid id) {
            try {
                var album = await _albumRepository.GetAlbumByIdAsync(id);
                if (album != null) {
                    await _albumRepository.DeleteAlbumAsync(id);
                    return Ok();
                }
                else {
                    return NotFound();
                }
            }
            catch (Exception) {
                return StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }

        [HttpPost("create")]
        public async Task<ActionResult<AlbumCreate>> CreateAlbum([FromBody] AlbumCreate newAlbum) {
            try {
                var album = await _albumRepository.GetAlbumByArtistNameAndTitleAsync(newAlbum.ArtistName, newAlbum.Title);
                if (album == null || album.ArtistName != newAlbum.ArtistName) {
                    await _albumRepository.CreateAlbumAsync(album);
                    return Ok();
                }
                else {
                    return BadRequest("Album already exists.");
                }
            }
            catch (Exception) {
                return StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }
    }
}
