const express = require("express");

const MongooseSnippetRepository = require("../../db/mongooseSnippet.repository");
const CreateSnippetUseCase = require("../../../application/snippet/create/createSnippet.usecase");
const GetSnippetsUseCase = require("../../../application/snippet/getAll/getSnippets.usecase");
const GetSnippetByIdUseCase = require("../../../application/snippet/getById/getSnippetById.usecase");
const UpdateSnippetUseCase = require("../../../application/snippet/update/updateSnippet.usecase");
const DeleteSnippetUseCase = require("../../../application/snippet/delete/deleteSnippet.usecase");

const GenerateSummaryUseCase = require("../../../application/snippet/generateSummary/generateSummary.usecase");

const SnippetController = require("../../../interfaces/snippet.controller");

const llmClient = require("../../llm/openai.client");

const router = express.Router();

// Repository + UseCases
const repository = new MongooseSnippetRepository();

const createSnippetUseCase = new CreateSnippetUseCase(repository);
const getSnippetsUseCase = new GetSnippetsUseCase(repository);
const getSnippetByIdUseCase = new GetSnippetByIdUseCase(repository);
const updateSnippetUseCase = new UpdateSnippetUseCase(repository);
const deleteSnippetUseCase = new DeleteSnippetUseCase(repository);
  const generateSummaryUseCase = new GenerateSummaryUseCase(repository, llmClient);

const controller = new SnippetController({
  createSnippetUseCase,
  getSnippetsUseCase,
  getSnippetByIdUseCase,
  updateSnippetUseCase,
  deleteSnippetUseCase,
  generateSummaryUseCase
});

router.post("/", (req, res) => controller.create(req, res));
router.get("/", (req, res) => controller.list(req, res));
router.get("/:id", (req, res) => controller.get(req, res));
router.put("/:id", (req, res) => controller.update(req, res));
router.delete("/:id", (req, res) => controller.remove(req, res));
router.get("/generate-summary/:promptFromUser", (req, res) => controller.summary(req, res));

module.exports = router;
