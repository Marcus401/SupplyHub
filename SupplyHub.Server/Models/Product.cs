﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace SupplyHub.Server.Models;

public partial class Product
{
    [Key]
    [Column("ProductID")]
    public int ProductId { get; set; }

    [StringLength(50)]
    [Unicode(false)]
    public string ProductName { get; set; } = null!;

    [StringLength(50)]
    [Unicode(false)]
    public string ProductType { get; set; } = null!;

    public int StockAvailable { get; set; }

    [StringLength(50)]
    [Unicode(false)]
    public string Unit { get; set; } = null!;

    [StringLength(50)]
    [Unicode(false)]
    public string Timeframe { get; set; } = null!;

    [StringLength(300)]
    [Unicode(false)]
    public string Description { get; set; } = null!;

    [Column("FAQ")]
    [StringLength(300)]
    [Unicode(false)]
    public string? Faq { get; set; }

    [InverseProperty("Product")]
    public virtual ICollection<Advertisement> Advertisements { get; set; } = new List<Advertisement>();

    [InverseProperty("ProductsNavigation")]
    public virtual ICollection<SellerProfile> SellerProfiles { get; set; } = new List<SellerProfile>();
}
