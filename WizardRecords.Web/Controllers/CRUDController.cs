using Microsoft.AspNetCore.Mvc;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Dtos;
using WizardRecords.Repositories;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CRUDController : ControllerBase
    {
        private readonly IAlbumRepository _albumRepository;

        public CRUDController(IAlbumRepository albumRepository)
        {
            _albumRepository = albumRepository;
        }

        [HttpPut("update/{id}")]
        public async Task<ActionResult<AlbumUpdate>> UpdateAlbum(Guid id, [FromBody] AlbumUpdate updatedAlbum)
        {
            try
            {
                var album = await _albumRepository.GetAlbumByIdAsync(id);
                if (album != null)
                {
                    album.Title = updatedAlbum.Title;
                    album.StockQuantity = updatedAlbum.StockQuantity;
                    album.Price = updatedAlbum.Price;
                    //album.ImageFilePath = updatedAlbum.ImageFilePath;
                    album.Comments = updatedAlbum.Comments;
        
                    await _albumRepository.UpdateAlbumAsync(id, album);
                    return Ok();
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }

        [HttpGet("delete")]
        public async Task<ActionResult<AlbumDelete>> GetAlbumByTitle(string title)
        {
            try
            {
                var deletedAlbum = await _albumRepository.GetAlbumByTitleAsync(title);

                if (deletedAlbum != null)
                {
                    await _albumRepository.DeleteAlbumAsync(title);
                    return Ok(); 
                }
                else
                {
                    return NotFound(); 
                }
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }

        [HttpPost("create")]
        public async Task<ActionResult<AlbumCreate>> CreateAlbum([FromBody] Album album) {
            try {
                var artistIdPost = Guid.NewGuid();
                var labelIdPost = Guid.NewGuid();

                var createdAlbum = new Album(
                    albumId: Guid.NewGuid(),
                    artistId: artistIdPost,
                    labelId: labelIdPost,
                    title: album.Title,
                    stockQty: album.StockQuantity,
                    price: album.Price,
                    category: album.Category,
                    mediaType: album.Media,
                    formatType: album.Format,
                    albumGenre: album.AlbumGenre,
                    mediaGrade: album.MediaGrade ?? Grade.NONE,  
                    sleeveGrade: album.SleeveGrade ?? Grade.NONE,
                    catalogNumber: album.CatalogNumber ?? "-",
                    matrixNumber: album.MatrixNumber ?? "-",
                    comments: album.Comments ?? "-",
                    imageFilePath: album.ImageFilePath ?? "-"
                );

                await _albumRepository.CreateAlbumAsync(createdAlbum);

                return Ok(new { Id = createdAlbum.Id });
            }
            catch (Exception ex) {
                Console.WriteLine(ex);

                return StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }
    }
}
