const {PrismaClient} = require('@prisma/client')

const database = new PrismaClient()

async function main() {
    try {
        await database.category.createMany({
            data: [
                {
                    name: 'Home Workouts'
                },
                {
                    name: 'Gym Workouts'
                },
                {
                    name: 'Meditation'
                },
                {
                    name: 'Health & Wellness'
                },
                {
                    name: 'Nutrition'
                },
                {
                    name: 'PT/OT'
                },
            ]
        })

        console.log("Success")
    } catch (error) {
        console.log("Error seeding the database categories", error)
    } finally {
        await database.$disconnect()
    }
}

main()