﻿namespace Dtos.Account;

public class UserSignUpRequestDto
{
	public required string FirstName { get; set; }
	public required string LastName { get; set; }
	public required string Email { get; set; }
	public required string Password { get; set; }
}