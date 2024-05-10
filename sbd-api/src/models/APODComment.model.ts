import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';

export interface APODCommentModel
	extends Model<InferAttributes<APODCommentModel>, InferCreationAttributes<APODCommentModel>> {
	id: CreationOptional<number>;
	apodDate: string;
	content: string;
}

const APODCommentDefine = (sequelize: Sequelize) => {
	return sequelize.define<APODCommentModel>(
		'APODComment',
		{
			id: {
				type: DataTypes.BIGINT,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				unique: true,
			},
			apodDate: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			content: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			timestamps: true,
		},
	);
};

export default APODCommentDefine;
