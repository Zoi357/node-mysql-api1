import {DataTypes} from 'sequelize';

export default function model(sequelize: any) {
    const attributes = {
    };
    const options = {
    };
    return sequelize.define('RefreshToken', attributes, options);
} 