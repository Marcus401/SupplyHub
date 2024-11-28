namespace SupplyHub.Server.Helpers;

public class Base64StringArrayToBytes
{
	public static byte[][] ConvertBase64StringArrayToByteArrayArray(string[] base64Strings)
	{
		byte[][] result = new byte[base64Strings.Length][];

		for (int i = 0; i < base64Strings.Length; i++)
		{
			result[i] = Convert.FromBase64String(base64Strings[i]);
		}

		return result;
	}
}