using System.Threading.Tasks;
using SupplyHub.Server.Models;
using Dtos.Menu;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace SupplyHub.Server.Controllers;

[ApiController]
[Route("api/menu")]
public class MenuController : ControllerBase
{
	[HttpPost("navbar-info")]
	public async Task<IActionResult> NavbarInfo()
	{
		return Ok();
	}
	
	[Authorize]
	[HttpPost("inquire-user/{userId}")]
	public async Task<IActionResult> InquireUser([FromRoute] int userId)
	{
		return Ok();
	}
	
	[HttpPost("fetch-products-list")]
	public async Task<IActionResult> FetchProductsList()
	{
		return Ok();
	}
	
	[HttpPost("fetch-sellers-list")]
	public async Task<IActionResult> FetchSellersPage()
	{
		return Ok();
	}
}