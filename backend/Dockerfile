FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy csproj and restore
COPY PedroArruda.Portfolio.Api/*.csproj ./PedroArruda.Portfolio.Api/
RUN dotnet restore PedroArruda.Portfolio.Api/PedroArruda.Portfolio.Api.csproj

# Copy everything else and build
COPY . .
WORKDIR /src/PedroArruda.Portfolio.Api
RUN dotnet publish -c Release -o /app/publish

# Runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .

# Render uses PORT environment variable
ENV ASPNETCORE_URLS=http://+:${PORT:-10000}
ENV ASPNETCORE_ENVIRONMENT=Production

EXPOSE 10000
ENTRYPOINT ["dotnet", "PedroArruda.Portfolio.Api.dll"]
