import { Mapper } from 'src/app/core/base/mapper';
import { EstablishmentModel } from 'src/app/core/domain/establishment/establishment.model';
import { EstablishmentWebEntity } from './establishment-web-entity';


export class EstablishmentMockRepositoryMapper extends Mapper<
  EstablishmentWebEntity,
  EstablishmentModel
  > {
  mapFrom(param: EstablishmentWebEntity): EstablishmentModel {
    return {
      id: param.id,
      index: param.index,
      guid: param.guid,
      picture: param.picture,
      name: param.name,
      email: param.email,
      phone: param.phone,
      address: param.address,
      registered: param.registered,
      latitude: param.latitude,
      longitude: param.longitude,
      account: param.account,
      bank: param.bank,
      agency: param.agency,
      agency_digit: param.agency_digit,
      account_digit: param.account_digit,
      account_type: param.account_type,
      withdraw: param.withdraw,
      cpf_cnpj: param.cpf_cnpj,
      city: param.city
    };
  }
  mapTo(param: EstablishmentModel): EstablishmentWebEntity {
    return {
      id: param.id,
      index: param.index,
      guid: param.guid,
      picture: param.picture,
      name: param.name,
      email: param.email,
      phone: param.phone,
      address: param.address,
      registered: param.registered,
      latitude: param.latitude,
      longitude: param.longitude,
      account: param.account,
      bank: param.bank,
      agency: param.agency,
      agency_digit: param.agency_digit,
      account_digit: param.account_digit,
      account_type: param.account_type,
      withdraw: param.withdraw,
      cpf_cnpj: param.cpf_cnpj,
      city: param.city
    };
  }
}
