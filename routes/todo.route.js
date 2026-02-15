const express = require("express")
const router = express.Router();

const ToDoController = require("../controllers/todo.controller")

/**
 * @swagger
 * tags:
 *   - name: ToDo
 *     description: to-do bilan ishlash
 */

/**
 * @swagger
 * /api/todo:
 *   post:
 *     tags: [ToDo]
 *     summary: Yangi maqsad
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               completed:
 *                 type: boolean
 *                 default: false
 *     responses:
 *       201:
 *         description: Reja yaratildi
 *       400:
 *         description: Validation xatosi
 *       500:
 *         description: Server xatosi
 */
router.post("/", ToDoController.createToDo)

/**
 * @swagger
 * /api/todo:
 *   get:
 *     tags: [ToDo]
 *     summary: Barcha to-dolarni olish
 *     responses:
 *       200:
 *         description: to-dolar ro'yxati
 *       500:
 *         description: Server xatosi
 */
router.get("/", ToDoController.getToDo);

/**
 * @swagger
 * /api/todo/{id}:
 *   get:
 *     tags: [ToDo]
 *     summary: ID orqali to-dolarni olish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: to-do id raqami
 *     responses:
 *       200:
 *         description: to-do topildi
 *       404:
 *         description: to-do topilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/:id", ToDoController.getToDoById)

/**
 * @swagger
 * /api/todo/{id}:
 *   put:
 *     tags: [ToDo]
 *     summary: to-do malumotlarini yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               completed:
 *                 type: boolean
 *                 default: false
 *     responses:
 *       200:
 *         description: to-do yangilandi
 *       400:
 *         description: Xato ma'lumot
 *       404:
 *         description: Malumot topilmadi
 *       500:
 *         description: Server xatosi
 */
router.put("/:id", ToDoController.updateToDo)

/**
 * @swagger
 * /api/todo/{id}:
 *   delete:
 *     tags: [ToDo]
 *     summary: ID orqali to-dolarni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: to-do o'chirildi
 *       404:
 *         description: to-do topilmadi
 *       500:
 *         description: Server xatosi
 */
router.delete("/:id", ToDoController.deleteToDo)

module.exports = router;