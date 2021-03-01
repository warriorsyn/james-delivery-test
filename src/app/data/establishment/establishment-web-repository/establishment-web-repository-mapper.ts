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
    };
  }
}
