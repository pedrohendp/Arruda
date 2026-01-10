using PedroArruda.Portfolio.Api.Endpoints;
using PedroArruda.Portfolio.Api.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddSingleton<IPortfolioService, PortfolioService>();

// Configure CORS - Allow GitHub Pages and local development
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins(
                "http://localhost:5173",
                "http://localhost:3000",
                "https://pedrohendp.github.io"
              )
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Configure Swagger/OpenAPI
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new()
    {
        Title = "Pedro Arruda Portfolio API",
        Version = "v1",
        Description = "API RESTful para o portfólio de Pedro Arruda - Backend Developer especializado em C# e .NET"
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline
app.UseSwagger();
app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "Pedro Arruda Portfolio API v1");
    options.DocumentTitle = "Pedro Arruda - Portfolio API";
    options.RoutePrefix = "swagger";
});

app.UseCors("AllowFrontend");

// Map endpoints
app.MapDeveloperEndpoints();
app.MapSkillsEndpoints();
app.MapProjectsEndpoints();
app.MapContactEndpoints();
app.MapHealthEndpoints();

// Redirect root to Swagger
app.MapGet("/", () => Results.Redirect("/swagger"));

app.Run();
