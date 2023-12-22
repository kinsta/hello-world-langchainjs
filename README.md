# Kinsta - Hello World - LangChainJS

An example of how to deploy an Express application with [LangChainJS](https://js.langchain.com) on Kinsta App Hosting services.

---
Kinsta is a developer-centric cloud host / PaaS. We’re striving to make it easier for you to share your web projects with your users. Focus on coding and building, and we’ll take care of deployment and provide fast, scalable hosting. + 24/7 expert-only support.

- [Start your free trial](https://kinsta.com/signup/?product_type=app-db)
- [Application Hosting](https://kinsta.com/application-hosting)
- [Database Hosting](https://kinsta.com/database-hosting)

## Dependency Management

During the deployment process Kinsta will automatically install dependencies defined in your `package.json` file.

## Web Server Setup

### Environment Variables

<details>

<summary>ℹ️ OpenAI models</summary>

In this example, we chose OpenAI's models for the sake of simplicity, but you're free to choose the models you prefer as LangChain provides support for other models as well. In that case, we recommend you remove the `OPENAI_API_KEY` environment variable and the relevant application code.

</details>

To ensure your successful deployment, set the following environment variables:

```bash
# Get it from https://platform.openai.com/account/api-keys
OPENAI_API_KEY=<YOUR_API_KEY>
```

## What is LangChain
LangChain framework is intended to develop language model-powered applications that are data-aware, agentic, and differentiated. More information is available on the [LangChain](https://js.langchain.com) website.