﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models;
public class SellerProduct
{
	public int UserId { get; set; }
	public int ProductId { get; set; }
	public required User User { get; set; }
	public required Product Product { get; set; }
}