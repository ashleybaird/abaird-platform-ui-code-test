import { TestBed, async } from '@angular/core/testing';
import { ListComponent } from './list.component'; 

describe('ListComponent', () => {
  let component: ListComponent;
  let reload = false;

  beforeEach(() => {
    component = new ListComponent();
    TestBed.configureTestingModule({
      declarations: [
        ListComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('unselected providers', () => {
    it('should have an initial length of 3', () => {
      expect(component.unselectedProviders.length).toEqual(3);
    });

    it('should have an id', () => {
      expect(component.unselectedProviders[0].id).toEqual('1');
    });

    it('should have a name', () => {
      expect(component.unselectedProviders[0].name).toEqual('John');
    });

    it('should have an address', () => {
      expect(component.unselectedProviders[0].address).toEqual('123 Greenway Blvd');
    });

    it('should have a phone', () => {
      expect(component.unselectedProviders[0].phone).toEqual('8991234321');
    });
  });

  describe('selected providers', () => {
    it('should have no initial length', () => {
      expect(component.selectedProviders.length).toEqual(0);
    });
  });

  it('adds a selected provider when unselected provider is clicked', () => {
    const fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    const provider = compiled.querySelector('.providers-container');
    provider.click();
    fixture.detectChanges();

    expect(JSON.parse(localStorage.getItem('savedProviders'))[0].name).toBe('John');
  });

  it('removes a selected provider when that provider is clicked', () => {
    const fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    const providerRemove = compiled.querySelector('.provider-selected .provider-delete');
    providerRemove.click();
    fixture.detectChanges();
    
    expect(JSON.parse(localStorage.getItem('unsavedProviders')).length).toEqual(3);
  });
});
