using PedroArruda.Portfolio.Api.Models;
using PedroArruda.Portfolio.Api.Services;

namespace PedroArruda.Portfolio.Api.Endpoints;

public static class ContactEndpoints
{
    public static void MapContactEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/api/contact")
            .WithTags("Contact")
            .WithOpenApi();

        group.MapGet("/info", GetContactInfo)
            .WithName("GetContactInfo")
            .WithSummary("Retorna informações de contato")
            .Produces<ContactInfo>(StatusCodes.Status200OK);

        group.MapPost("/", SendContactMessage)
            .WithName("SendContactMessage")
            .WithSummary("Envia uma mensagem de contato")
            .Produces<ContactResponse>(StatusCodes.Status200OK)
            .Produces(StatusCodes.Status400BadRequest);
    }

    private static IResult GetContactInfo(IPortfolioService service)
    {
        return Results.Ok(service.GetContactInfo());
    }

    private static async Task<IResult> SendContactMessage(ContactMessage message, IPortfolioService service)
    {
        if (string.IsNullOrWhiteSpace(message.Name) ||
            string.IsNullOrWhiteSpace(message.Email) ||
            string.IsNullOrWhiteSpace(message.Message))
        {
            return Results.BadRequest(new ContactResponse
            {
                Success = false,
                Message = "Por favor, preencha todos os campos obrigatórios."
            });
        }

        var response = await service.SendContactMessageAsync(message);
        return Results.Ok(response);
    }
}
