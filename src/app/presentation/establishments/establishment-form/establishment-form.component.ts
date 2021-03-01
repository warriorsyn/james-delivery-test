import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EstablishmentModel } from 'src/app/core/domain/establishment/establishment.model';
import { GetByIdEstablishmentUsecase } from 'src/app/core/usecases/establishment/get-by-id.usecase';

@Component({
  selector: 'app-establishment-form',
  templateUrl: './establishment-form.component.html',
  styleUrls: ['./establishment-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EstablishmentFormComponent implements OnInit {

  public establishment!: EstablishmentModel;

  public establishmentForm!: FormGroup;

  constructor(private activatedRouter: ActivatedRoute, private getById: GetByIdEstablishmentUsecase, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getEstablishment();

    this.establishmentForm = this.fb.group({
      name: [''],
      city: [''],
      address: [''],
      bank: [''],
      agency: [''],
      agency_digit: [''],
      account: [''],
      account_digit: [''],
      account_type: [''],
      withdraw: [],
      cpf_cnpj: ['']
    })

    if (this.establishment) {
      this.establishmentForm.setValue({
        name: this.establishment.name,
        city: [''],
        address: this.establishment.address,
        bank: [''],
        agency: [''],
        agency_digit: [''],
        account: [''],
        account_digit: [''],
        account_type: [''],
        withdraw: [],
        cpf_cnpj: ['']
      })
    }

  }

  public getEstablishment() {
    this.activatedRouter.paramMap.subscribe(param => {
      console.log('ola', param.get("id"))
      this.getById.execute(param.get('id') ?? '').subscribe(item => { this.establishment = item; console.log('rola', item) })
    })
  }
}
