import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  @ViewChild('agencyDigit') agencyDigit!: ElementRef;

  @ViewChild('account') account!: ElementRef;
  @ViewChild('accountDigit') accountDigit!: ElementRef;

  public establishment!: EstablishmentModel;

  public establishmentForm!: FormGroup;

  constructor(private activatedRouter: ActivatedRoute,
    private getById: GetByIdEstablishmentUsecase,
    private fb: FormBuilder,
    private update: UpdateEstablishmentUsecase,
    private toastr: ToastrService) { }

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
      cpf_cnpj: [''],
      picture: ['']
    })

    if (this.establishment) {
      this.establishmentForm.setValue({
        id: this.establishment.id,
        name: this.establishment.name,
        city: this.establishment.city,
        address: this.establishment.address,
        bank: this.establishment.bank,
        agency: this.establishment.agency,
        agency_digit: this.establishment.agency_digit,
        account: this.establishment.account,
        account_digit: this.establishment.account_digit,
        account_type: this.establishment.account_type,
        withdraw: this.establishment.withdraw,
        cpf_cnpj: this.establishment.cpf_cnpj,
        picture: this.establishment.picture
      })
    }
  }

  public save(data: EstablishmentModel): void {
    this.update.execute(data).subscribe(() => {
      this.getEstablishment();
      this.toastr.success('Estabelecimento atualizado com sucesso!', 'Atualizado');
    })
  }

  public getEstablishment(): void {
    this.activatedRouter.paramMap.subscribe(param => {
      this.getById.execute(param.get('id') ?? '').subscribe(item => this.establishment = item);
    })
  }

  public handleAngency(value: string): void {
    if (value.length === 4) {
      this.agencyDigit.nativeElement.focus();
    }
  }

  public handleAgencyDigit(value: string): void {
    if (value.length === 1) {
      this.account.nativeElement.focus();
    }
  }

  public handleAccount(value: string) {
    if (value.length === 5) {
      this.accountDigit.nativeElement.focus();
    }
  }
}
