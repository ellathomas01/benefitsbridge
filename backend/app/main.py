from fastapi import FastAPI

app = FastAPI(
    title="BenefitsBridge API",
    description="API for the BenefitsBridge benefits navigation platform.",
    version="0.1.0",
)


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "benefitsbridge-api",
    }
