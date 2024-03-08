const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class surveyModel {
    static async getAllSurveys(){
        return await prisma.survey.findMany()
    }

    static async getSurveyById(id){
        return await prisma.survey.findFirst({where: {id: Number(id)}})
    }

    static async createSurvey(data){
        return await prisma.survey.create({data})
    }

    static async updateSurvey(id,data){
        return await prisma.survey.update({where:{id: Number(id)}, data})
    }
    static async deleteSurvey(id){
        return await prisma.survey.delete({where: {id: Number(id)}})
    }
}

module.exports = surveyModel;