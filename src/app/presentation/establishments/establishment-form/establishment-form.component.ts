import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EstablishmentModel } from 'src/app/core/domain/establishment/establishment.model';
import { GetByIdEstablishmentUsecase } from 'src/app/core/usecases/establishment/get-by-id.usecase';
import { UpdateEstablishmentUsecase } from 'src/app/core/usecases/establishment/update.usecase';

@Component({
  selector: 'app-establishment-form',
  templateUrl: './establishment-form.component.html',
  styleUrls: ['./establishment-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EstablishmentFormComponent implements OnInit {

  @ViewChild('agencyDigit') agencyDigit!: HTMLInputElement;

  public establishment!: EstablishmentModel;

  public establishmentForm!: FormGroup;

  constructor(private activatedRouter: ActivatedRoute, private getById: GetByIdEstablishmentUsecase, private fb: FormBuilder, private update: UpdateEstablishmentUsecase) { }

  ngOnInit(): void {
    this.getEstablishment();

    this.establishmentForm = this.fb.group({
      id: null,
      name: [''],
      city: [''],
      address: [''],
      bank: [''],
      agency: [''],
      agency_digit: [''],
      account: [''],
      account_digit: [''],
      account_type: [''],
      withdraw: [true],
      cpf_cnpj: ['']
    })

    if (this.establishment) {
      this.establishmentForm.setValue({
        id: this.establishment.id,
        name: this.establishment.name,
        city: '',
        address: this.establishment.address,
        bank: this.establishment.bank,
        agency: this.establishment.agency,
        agency_digit: this.establishment.agency_digit,
        account: this.establishment.account,
        account_digit: this.establishment.account_digit,
        account_type: this.establishment.account_type,
        withdraw: this.establishment.withdraw,
        cpf_cnpj: this.establishment.cpf_cnpj
      })
    }
  }

  public save(data: EstablishmentModel) {
    this.update.execute(data).subscribe(w => {
      console.log("sucesso")
    })

    console.log('teste', data)
  }

  public getEstablishment() {
    this.activatedRouter.paramMap.subscribe(param => {
      console.log('ola', param.get("id"))
      this.getById.execute(param.get('id') ?? '').subscribe(item => { this.establishment = item; console.log('rola', item) })
    })
  }

  public handleAngency(value: string) {
    if (value.length === 4) {
      // this.agencyDigit.focus();
    }
  }
}
