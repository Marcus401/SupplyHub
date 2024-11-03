﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models;

public partial class Advertisement
{
    [Key]
    [Column("AdvertisementID")]
    public int AdvertisementId { get; set; }

    [Column("CompanyID")]
    public int CompanyId { get; set; }

    [Column("ProductID")]
    public int ProductId { get; set; }

    [Column(TypeName = "image")]
    public byte[] AdvertisementFile { get; set; } = null!;

    [ForeignKey("CompanyId")]
    [InverseProperty("Advertisements")]
    public virtual SellerProfile Company { get; set; } = null!;

    [ForeignKey("ProductId")]
    [InverseProperty("Advertisements")]
    public virtual Product Product { get; set; } = null!;
}
