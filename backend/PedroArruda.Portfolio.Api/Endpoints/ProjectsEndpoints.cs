using PedroArruda.Portfolio.Api.Models;
using PedroArruda.Portfolio.Api.Services;

namespace PedroArruda.Portfolio.Api.Endpoints;

public static class ProjectsEndpoints
{
    public static void MapProjectsEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/api/projects")
            .WithTags("Projects")
            .WithOpenApi();

        group.MapGet("/", GetAllProjects)
            .WithName("GetAllProjects")
            .WithSummary("Retorna todos os projetos")
            .Produces<IEnumerable<Project>>(StatusCodes.Status200OK);

        group.MapGet("/featured", GetFeaturedProjects)
            .WithName("GetFeaturedProjects")
            .WithSummary("Retorna os projetos em destaque")
            .Produces<IEnumerable<Project>>(StatusCodes.Status200OK);

        group.MapGet("/{slug}", GetProjectBySlug)
            .WithName("GetProjectBySlug")
            .WithSummary("Retorna detalhes de um projeto específico")
            .Produces<Project>(StatusCodes.Status200OK)
            .Produces(StatusCodes.Status404NotFound);
    }

    private static IResult GetAllProjects(IPortfolioService service)
    {
        return Results.Ok(service.GetProjects());
    }

    private static IResult GetFeaturedProjects(IPortfolioService service)
    {
        return Results.Ok(service.GetFeaturedProjects());
    }

    private static IResult GetProjectBySlug(string slug, IPortfolioService service)
    {
        var project = service.GetProjectBySlug(slug);
        return project is null
            ? Results.NotFound(new { message = $"Projeto '{slug}' não encontrado" })
            : Results.Ok(project);
    }
}
