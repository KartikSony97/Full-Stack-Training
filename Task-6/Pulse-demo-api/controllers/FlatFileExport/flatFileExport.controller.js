const { config } = require('dotenv')
const { ObjectId } = require('mongodb')

function validate(ObjectId){
    const validateUser = {
        id: Joi.string().min(3).required()
    };
    return Joi.validate(ObjectId, validateUser);  
}

class FlatFileExportController {

     constructor(db) {
         this.db = db
         this.saveExportConfiguration = this.saveExportConfiguration.bind(this)
         //this.deleteExportConfiguration = this.deleteExportConfiguration.bind(this)
         this.editExportConfiguration = this.editExportConfiguration.bind(this)
          this.getConfiguration = this.getConfiguration.bind(this)
     }

     

     async saveExportConfiguration(req, res) {
         const payload = { ...req.body }
         
         if(!validate(ObjectId)){         //if entered id will not found than in that case record can be inserted. 
            this.db.collection('exportConfigurations').insertOne(payload, (err, response) => {
            res.status(200).json({ success: response.ops })}
            )}
        else {
          res.status(400).json({ error: response.ops })
        }
     }


     async editExportConfiguration(req, res, next) {
        const { configId } = req.params
        const payload = {
            $set: {
                ...req.body,
                updatedAt: new Date().toISOString(),
            },
        }
        if (this.getConfiguration(configId)) {

            const {error} = validateCourse(req.body);  
            if(error) return res.status(400).send(error.details[0].message);

            this.db.collection('exportConfigurations').findOneAndUpdate({ _id: ObjectId(configId) }, payload)
                .then(() => {
                    res.json({status: 'Success', message: 'Record updated'
                    })
                })
                .catch((err) =>
                    res.json({ error: {status: 'Error', message: 'Failed to update',
                    },
                })
            )
        }
        else {
            res.json({status: 'Error', message: 'No record found',
            })
        }
    }
    getConfiguration(id) {
         return this.db.collection('exportConfigurations').findOne({ _id: ObjectId(id) })       
     }


validationSchema(action) {
    let defaultSchema =
        [
            check('clientId', 'ClientId is required').exists().trim().notEmpty(),
            check('team', 'Team name is required').exists().trim().notEmpty(),
            check('tool', 'Tool is required.').exists().trim().notEmpty()
        ]

    if (action === 'edit') {
        defaultSchema.push(check('configId')
        .isMongoId()
        .withMessage('Invalid id'))
    }
    if (action === 'save'){
        defaultSchema.push(check('configId')
        .isMongoId()
        .withMessage('Id already exist'))
    }
    

    return defaultSchema
}

validate(req, res, next) {
    const errors = validationResult(req)

    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map((err) => {
    if(err.value === "" || err.param === 'configId')
        extractedErrors.push({ currentValue: err.value, [err.param]: err.msg })
    })

    return res.json({ status: "error", message: extractedErrors })
}
}

module.exports = FlatFileExportController;