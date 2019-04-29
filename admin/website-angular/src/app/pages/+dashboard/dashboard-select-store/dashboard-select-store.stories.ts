import { storiesOf, moduleMetadata } from '@storybook/angular';
import { text, withKnobs, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeModule } from 'app/@theme';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbSpinnerModule } from '@nebular/theme';
import { ConfirmationModalModule } from 'app/@shared/confirmation-modal/confirmation-modal.module';
import { ToasterModule } from 'angular2-toaster';
import { TranslateStore, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { routes, NbAuthModule } from '@nebular/auth';
import { NotifyService } from 'app/@core/services/notify/notify.service';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { PipesModule } from '@modules/client.common.angular2/pipes/pipes.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DashboardSelectStoreComponent } from './dashboard-select-store.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { I18nModule } from 'app/@core/utils/i18n.module';

const stories = storiesOf('Dashboard', module);

export function createApollo(httpLink: HttpLink) {
	return {
		link: httpLink.create({ uri: 'https://api.example.com/graphql' }),
		cache: new InMemoryCache()
	};
}

export function createTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http, '/i18n/', '.json');
}

stories.addDecorator(withKnobs);

stories.addDecorator(
	moduleMetadata({
		declarations: [DashboardSelectStoreComponent],
		imports: [
			NgSelectModule,
			CommonModule,
			ThemeModule,
			Ng2SmartTableModule,
			NbSpinnerModule,
			ConfirmationModalModule,
			ToasterModule.forRoot(),
			HttpClientModule,
			I18nModule,
			RouterModule.forChild(routes),
			NbAuthModule,
			ApolloModule,
			PipesModule
		],
		providers: [
			{
				provide: APOLLO_OPTIONS,
				useFactory: createApollo,
				deps: [HttpLink]
			},
			TranslateStore,
			TranslateService,
			NotifyService,
			HttpLink
		]
	})
);

stories.add('Dashboard Select Store', () => ({
	component: DashboardSelectStoreComponent,
	props: {
		stores: object('Stores', stores),
		text: text('Hello', ''),
		selectedStoreEmitter: action('Selected Data')
	}
}));

const stores = [
	{
		id: '5cb1494208d4970a8444d97d',
		_createdAt: '2018-06-28T08:05:00.000Z',
		name: 'Pizza Dan',
		contactEmail: 'Daija_Bernier8@gmail.com',
		contactPhone: '(667) 017-1190 x99049',
		logo:
			'https://fakeimg.pl/200x200/FFD890%2C128/000/?text=Pizza Dan&font_size=75',
		username: 'restaurant_pizza',
		usedCarriersIds: [
			'5cb1492408d4970a8444d8b5',
			'5cb1492408d4970a8444d8b7',
			'5cb1492408d4970a8444d8b9',
			'5cb1492508d4970a8444d8bb',
			'5cb1492508d4970a8444d8bd',
			'5cb1492508d4970a8444d8bf',
			'5cb1492508d4970a8444d8c1',
			'5cb1492608d4970a8444d8c3',
			'5cb1492608d4970a8444d8c5',
			'5cb1492608d4970a8444d8c7',
			'5cb1492708d4970a8444d8c9',
			'5cb1492708d4970a8444d8cb',
			'5cb1492708d4970a8444d8cd',
			'5cb1492708d4970a8444d8cf',
			'5cb1492808d4970a8444d8d1',
			'5cb1492808d4970a8444d8d3',
			'5cb1492808d4970a8444d8d5',
			'5cb1492808d4970a8444d8d7',
			'5cb1492908d4970a8444d8d9',
			'5cb1492908d4970a8444d8db',
			'5cb1492908d4970a8444d8dd',
			'5cb1492a08d4970a8444d8df',
			'5cb1492a08d4970a8444d8e1',
			'5cb1492a08d4970a8444d8e3',
			'5cb1492a08d4970a8444d8e5',
			'5cb1492b08d4970a8444d8e7',
			'5cb1492b08d4970a8444d8e9',
			'5cb1492b08d4970a8444d8eb',
			'5cb1492b08d4970a8444d8ed',
			'5cb1492c08d4970a8444d8ef',
			'5cb1492c08d4970a8444d8f1',
			'5cb1492c08d4970a8444d8f3',
			'5cb1492d08d4970a8444d8f5',
			'5cb1492d08d4970a8444d8f7',
			'5cb1492d08d4970a8444d8f9',
			'5cb1492d08d4970a8444d8fb',
			'5cb1492e08d4970a8444d8fd',
			'5cb1492e08d4970a8444d8ff',
			'5cb1492e08d4970a8444d901',
			'5cb1492f08d4970a8444d903',
			'5cb1492f08d4970a8444d905',
			'5cb1492f08d4970a8444d907',
			'5cb1492f08d4970a8444d909',
			'5cb1493008d4970a8444d90b',
			'5cb1493008d4970a8444d90d',
			'5cb1493008d4970a8444d90f',
			'5cb1493008d4970a8444d911',
			'5cb1493108d4970a8444d913',
			'5cb1493108d4970a8444d915',
			'5cb1493108d4970a8444d917',
			'5cb1493208d4970a8444d919',
			'5cb1493208d4970a8444d91b',
			'5cb1493208d4970a8444d91d',
			'5cb1493208d4970a8444d91f',
			'5cb1493308d4970a8444d921',
			'5cb1493308d4970a8444d923',
			'5cb1493308d4970a8444d925',
			'5cb1493308d4970a8444d927',
			'5cb1493408d4970a8444d929',
			'5cb1493408d4970a8444d92b',
			'5cb1493408d4970a8444d92d',
			'5cb1493508d4970a8444d92f',
			'5cb1493508d4970a8444d931',
			'5cb1493508d4970a8444d933',
			'5cb1493508d4970a8444d935',
			'5cb1493608d4970a8444d937',
			'5cb1493608d4970a8444d939',
			'5cb1493608d4970a8444d93b',
			'5cb1493708d4970a8444d93d',
			'5cb1493708d4970a8444d93f',
			'5cb1493708d4970a8444d941',
			'5cb1493708d4970a8444d943',
			'5cb1493808d4970a8444d945',
			'5cb1493808d4970a8444d947',
			'5cb1493808d4970a8444d949',
			'5cb1493808d4970a8444d94b',
			'5cb1493908d4970a8444d94d',
			'5cb1493908d4970a8444d94f',
			'5cb1493908d4970a8444d951',
			'5cb1493a08d4970a8444d953',
			'5cb1493a08d4970a8444d955',
			'5cb1493a08d4970a8444d957',
			'5cb1493a08d4970a8444d959',
			'5cb1493b08d4970a8444d95b',
			'5cb1493b08d4970a8444d95d',
			'5cb1493b08d4970a8444d95f',
			'5cb1493c08d4970a8444d961',
			'5cb1493c08d4970a8444d963',
			'5cb1493c08d4970a8444d965',
			'5cb1493c08d4970a8444d967',
			'5cb1493d08d4970a8444d969',
			'5cb1493d08d4970a8444d96b',
			'5cb1493d08d4970a8444d96d',
			'5cb1493e08d4970a8444d96f',
			'5cb1493f08d4970a8444d971',
			'5cb1493f08d4970a8444d973',
			'5cb1494008d4970a8444d975',
			'5cb1494108d4970a8444d977',
			'5cb1494108d4970a8444d979',
			'5cb1494208d4970a8444d97b'
		],
		carriersIds: [],
		geoLocation: {
			city: 'Ashdod',
			streetAddress: 'HaAtsmaut',
			house: '125',
			__typename: 'GeoLocation'
		},
		__typename: 'Warehouse',
		barcodeData: '5cb1494208d4970a8444d97d'
	},
	{
		id: '5cb1494408d4970a8444d983',
		_createdAt: '2018-05-13T19:26:00.000Z',
		name: 'Dominex Pizza',
		contactEmail: 'Lori_Morar@yahoo.com',
		contactPhone: '990.782.8808',
		logo:
			'https://fakeimg.pl/200x200/FFD890%2C128/000/?text=Pizza Pizza&font_size=75',
		username: 'dominex_pizza',
		usedCarriersIds: [
			'5cb1492408d4970a8444d8b5',
			'5cb1492408d4970a8444d8b7',
			'5cb1492408d4970a8444d8b9',
			'5cb1492508d4970a8444d8bb',
			'5cb1492508d4970a8444d8bd',
			'5cb1492508d4970a8444d8bf',
			'5cb1492508d4970a8444d8c1',
			'5cb1492608d4970a8444d8c3',
			'5cb1492608d4970a8444d8c5',
			'5cb1492608d4970a8444d8c7',
			'5cb1492708d4970a8444d8c9',
			'5cb1492708d4970a8444d8cb',
			'5cb1492708d4970a8444d8cd',
			'5cb1492708d4970a8444d8cf',
			'5cb1492808d4970a8444d8d1',
			'5cb1492808d4970a8444d8d3',
			'5cb1492808d4970a8444d8d5',
			'5cb1492808d4970a8444d8d7',
			'5cb1492908d4970a8444d8d9',
			'5cb1492908d4970a8444d8db',
			'5cb1492908d4970a8444d8dd',
			'5cb1492a08d4970a8444d8df',
			'5cb1492a08d4970a8444d8e1',
			'5cb1492a08d4970a8444d8e3',
			'5cb1492a08d4970a8444d8e5',
			'5cb1492b08d4970a8444d8e7',
			'5cb1492b08d4970a8444d8e9',
			'5cb1492b08d4970a8444d8eb',
			'5cb1492b08d4970a8444d8ed',
			'5cb1492c08d4970a8444d8ef',
			'5cb1492c08d4970a8444d8f1',
			'5cb1492c08d4970a8444d8f3',
			'5cb1492d08d4970a8444d8f5',
			'5cb1492d08d4970a8444d8f7',
			'5cb1492d08d4970a8444d8f9',
			'5cb1492d08d4970a8444d8fb',
			'5cb1492e08d4970a8444d8fd',
			'5cb1492e08d4970a8444d8ff',
			'5cb1492e08d4970a8444d901',
			'5cb1492f08d4970a8444d903',
			'5cb1492f08d4970a8444d905',
			'5cb1492f08d4970a8444d907',
			'5cb1492f08d4970a8444d909',
			'5cb1493008d4970a8444d90b',
			'5cb1493008d4970a8444d90d',
			'5cb1493008d4970a8444d90f',
			'5cb1493008d4970a8444d911',
			'5cb1493108d4970a8444d913',
			'5cb1493108d4970a8444d915',
			'5cb1493108d4970a8444d917',
			'5cb1493208d4970a8444d919',
			'5cb1493208d4970a8444d91b',
			'5cb1493208d4970a8444d91d',
			'5cb1493208d4970a8444d91f',
			'5cb1493308d4970a8444d921',
			'5cb1493308d4970a8444d923',
			'5cb1493308d4970a8444d925',
			'5cb1493308d4970a8444d927',
			'5cb1493408d4970a8444d929',
			'5cb1493408d4970a8444d92b',
			'5cb1493408d4970a8444d92d',
			'5cb1493508d4970a8444d92f',
			'5cb1493508d4970a8444d931',
			'5cb1493508d4970a8444d933',
			'5cb1493508d4970a8444d935',
			'5cb1493608d4970a8444d937',
			'5cb1493608d4970a8444d939',
			'5cb1493608d4970a8444d93b',
			'5cb1493708d4970a8444d93d',
			'5cb1493708d4970a8444d93f',
			'5cb1493708d4970a8444d941',
			'5cb1493708d4970a8444d943',
			'5cb1493808d4970a8444d945',
			'5cb1493808d4970a8444d947',
			'5cb1493808d4970a8444d949',
			'5cb1493808d4970a8444d94b',
			'5cb1493908d4970a8444d94d',
			'5cb1493908d4970a8444d94f',
			'5cb1493908d4970a8444d951',
			'5cb1493a08d4970a8444d953',
			'5cb1493a08d4970a8444d955',
			'5cb1493a08d4970a8444d957',
			'5cb1493a08d4970a8444d959',
			'5cb1493b08d4970a8444d95b',
			'5cb1493b08d4970a8444d95d',
			'5cb1493b08d4970a8444d95f',
			'5cb1493c08d4970a8444d961',
			'5cb1493c08d4970a8444d963',
			'5cb1493c08d4970a8444d965',
			'5cb1493c08d4970a8444d967',
			'5cb1493d08d4970a8444d969',
			'5cb1493d08d4970a8444d96b',
			'5cb1493d08d4970a8444d96d',
			'5cb1493e08d4970a8444d96f',
			'5cb1493f08d4970a8444d971',
			'5cb1493f08d4970a8444d973',
			'5cb1494008d4970a8444d975',
			'5cb1494108d4970a8444d977',
			'5cb1494108d4970a8444d979',
			'5cb1494208d4970a8444d97b'
		],
		carriersIds: [],
		geoLocation: {
			city: 'Ashdod',
			streetAddress: 'HaAtsmaut',
			house: '125',
			__typename: 'GeoLocation'
		},
		__typename: 'Warehouse',
		barcodeData: '5cb1494408d4970a8444d983'
	},
	{
		id: '5cb1494308d4970a8444d97f',
		_createdAt: '2017-04-01T04:12:00.000Z',
		name: 'Pizza Hit',
		contactEmail: 'Wilburn_Konopelski80@yahoo.com',
		contactPhone: '641.266.1153 x733',
		logo:
			'https://fakeimg.pl/200x200/FFD890%2C128/000/?text=Pizza Hit&font_size=75',
		username: 'hut_pizza',
		usedCarriersIds: [
			'5cb1492408d4970a8444d8b5',
			'5cb1492408d4970a8444d8b7',
			'5cb1492408d4970a8444d8b9',
			'5cb1492508d4970a8444d8bb',
			'5cb1492508d4970a8444d8bd',
			'5cb1492508d4970a8444d8bf',
			'5cb1492508d4970a8444d8c1',
			'5cb1492608d4970a8444d8c3',
			'5cb1492608d4970a8444d8c5',
			'5cb1492608d4970a8444d8c7',
			'5cb1492708d4970a8444d8c9',
			'5cb1492708d4970a8444d8cb',
			'5cb1492708d4970a8444d8cd',
			'5cb1492708d4970a8444d8cf',
			'5cb1492808d4970a8444d8d1',
			'5cb1492808d4970a8444d8d3',
			'5cb1492808d4970a8444d8d5',
			'5cb1492808d4970a8444d8d7',
			'5cb1492908d4970a8444d8d9',
			'5cb1492908d4970a8444d8db',
			'5cb1492908d4970a8444d8dd',
			'5cb1492a08d4970a8444d8df',
			'5cb1492a08d4970a8444d8e1',
			'5cb1492a08d4970a8444d8e3',
			'5cb1492a08d4970a8444d8e5',
			'5cb1492b08d4970a8444d8e7',
			'5cb1492b08d4970a8444d8e9',
			'5cb1492b08d4970a8444d8eb',
			'5cb1492b08d4970a8444d8ed',
			'5cb1492c08d4970a8444d8ef',
			'5cb1492c08d4970a8444d8f1',
			'5cb1492c08d4970a8444d8f3',
			'5cb1492d08d4970a8444d8f5',
			'5cb1492d08d4970a8444d8f7',
			'5cb1492d08d4970a8444d8f9',
			'5cb1492d08d4970a8444d8fb',
			'5cb1492e08d4970a8444d8fd',
			'5cb1492e08d4970a8444d8ff',
			'5cb1492e08d4970a8444d901',
			'5cb1492f08d4970a8444d903',
			'5cb1492f08d4970a8444d905',
			'5cb1492f08d4970a8444d907',
			'5cb1492f08d4970a8444d909',
			'5cb1493008d4970a8444d90b',
			'5cb1493008d4970a8444d90d',
			'5cb1493008d4970a8444d90f',
			'5cb1493008d4970a8444d911',
			'5cb1493108d4970a8444d913',
			'5cb1493108d4970a8444d915',
			'5cb1493108d4970a8444d917',
			'5cb1493208d4970a8444d919',
			'5cb1493208d4970a8444d91b',
			'5cb1493208d4970a8444d91d',
			'5cb1493208d4970a8444d91f',
			'5cb1493308d4970a8444d921',
			'5cb1493308d4970a8444d923',
			'5cb1493308d4970a8444d925',
			'5cb1493308d4970a8444d927',
			'5cb1493408d4970a8444d929',
			'5cb1493408d4970a8444d92b',
			'5cb1493408d4970a8444d92d',
			'5cb1493508d4970a8444d92f',
			'5cb1493508d4970a8444d931',
			'5cb1493508d4970a8444d933',
			'5cb1493508d4970a8444d935',
			'5cb1493608d4970a8444d937',
			'5cb1493608d4970a8444d939',
			'5cb1493608d4970a8444d93b',
			'5cb1493708d4970a8444d93d',
			'5cb1493708d4970a8444d93f',
			'5cb1493708d4970a8444d941',
			'5cb1493708d4970a8444d943',
			'5cb1493808d4970a8444d945',
			'5cb1493808d4970a8444d947',
			'5cb1493808d4970a8444d949',
			'5cb1493808d4970a8444d94b',
			'5cb1493908d4970a8444d94d',
			'5cb1493908d4970a8444d94f',
			'5cb1493908d4970a8444d951',
			'5cb1493a08d4970a8444d953',
			'5cb1493a08d4970a8444d955',
			'5cb1493a08d4970a8444d957',
			'5cb1493a08d4970a8444d959',
			'5cb1493b08d4970a8444d95b',
			'5cb1493b08d4970a8444d95d',
			'5cb1493b08d4970a8444d95f',
			'5cb1493c08d4970a8444d961',
			'5cb1493c08d4970a8444d963',
			'5cb1493c08d4970a8444d965',
			'5cb1493c08d4970a8444d967',
			'5cb1493d08d4970a8444d969',
			'5cb1493d08d4970a8444d96b',
			'5cb1493d08d4970a8444d96d',
			'5cb1493e08d4970a8444d96f',
			'5cb1493f08d4970a8444d971',
			'5cb1493f08d4970a8444d973',
			'5cb1494008d4970a8444d975',
			'5cb1494108d4970a8444d977',
			'5cb1494108d4970a8444d979',
			'5cb1494208d4970a8444d97b'
		],
		carriersIds: [],
		geoLocation: {
			city: 'Ashdod',
			streetAddress: 'HaAtsmaut',
			house: '125',
			__typename: 'GeoLocation'
		},
		__typename: 'Warehouse',
		barcodeData: '5cb1494308d4970a8444d97f'
	},
	{
		id: '5cb1492108d4970a8444b566',
		_createdAt: '2016-12-23T00:21:00.000Z',
		name: 'Restaurant Leffler, Gislason and Williamson',
		contactEmail: 'Elinor.Abernathy69@gmail.com',
		contactPhone: '1-547-018-6580 x973',
		logo:
			'https://fakeimg.pl/200x200/FFD890%2C128/000/?text=Leffler, Gislason and Williamson&font_size=75',
		username: 'Wava_Kub',
		usedCarriersIds: ['5cb1492108d4970a8444b564'],
		carriersIds: [],
		geoLocation: {
			city: 'Violafurt',
			streetAddress: '4642 Rempel Valleys',
			house: '43',
			__typename: 'GeoLocation'
		},
		__typename: 'Warehouse',
		barcodeData: '5cb1492108d4970a8444b566'
	},
	{
		id: '5cb1492108d4970a8444b56a',
		_createdAt: '2014-08-16T20:08:00.000Z',
		name: 'Restaurant Lynch, Mann and Roberts',
		contactEmail: 'Gisselle91@yahoo.com',
		contactPhone: '384.622.9808 x399',
		logo:
			'https://fakeimg.pl/200x200/FFD890%2C128/000/?text=Lynch, Mann and Roberts&font_size=75',
		username: 'Emmett80',
		usedCarriersIds: ['5cb1492108d4970a8444b568'],
		carriersIds: [],
		geoLocation: {
			city: 'Deckowmouth',
			streetAddress: '0687 Salma Inlet',
			house: '55',
			__typename: 'GeoLocation'
		},
		__typename: 'Warehouse',
		barcodeData: '5cb1492108d4970a8444b56a'
	},
	{
		id: '5cb1492008d4970a8444b562',
		_createdAt: '2013-06-30T10:02:00.000Z',
		name: 'Restaurant Goyette, Ankunding and Hansen',
		contactEmail: 'Demetrius_Barrows16@hotmail.com',
		contactPhone: '(407) 305-1598 x4226',
		logo:
			'https://fakeimg.pl/200x200/FFD890%2C128/000/?text=Goyette, Ankunding and Hansen&font_size=75',
		username: 'Brisa.Runolfsdottir',
		usedCarriersIds: ['5cb1492008d4970a8444b560'],
		carriersIds: [],
		geoLocation: {
			city: 'Ritchieside',
			streetAddress: '668 Bridie Islands',
			house: '197',
			__typename: 'GeoLocation'
		},
		__typename: 'Warehouse',
		barcodeData: '5cb1492008d4970a8444b562'
	},
	{
		id: '5cb1494408d4970a8444d981',
		_createdAt: '2013-05-14T12:06:00.000Z',
		name: 'Pizza Troya',
		contactEmail: 'Corine11@hotmail.com',
		contactPhone: '(769) 437-3162 x6846',
		logo:
			'https://fakeimg.pl/200x200/FFD890%2C128/000/?text=Pizza Troya&font_size=75',
		username: 'trova_pizza',
		usedCarriersIds: [
			'5cb1492408d4970a8444d8b5',
			'5cb1492408d4970a8444d8b7',
			'5cb1492408d4970a8444d8b9',
			'5cb1492508d4970a8444d8bb',
			'5cb1492508d4970a8444d8bd',
			'5cb1492508d4970a8444d8bf',
			'5cb1492508d4970a8444d8c1',
			'5cb1492608d4970a8444d8c3',
			'5cb1492608d4970a8444d8c5',
			'5cb1492608d4970a8444d8c7',
			'5cb1492708d4970a8444d8c9',
			'5cb1492708d4970a8444d8cb',
			'5cb1492708d4970a8444d8cd',
			'5cb1492708d4970a8444d8cf',
			'5cb1492808d4970a8444d8d1',
			'5cb1492808d4970a8444d8d3',
			'5cb1492808d4970a8444d8d5',
			'5cb1492808d4970a8444d8d7',
			'5cb1492908d4970a8444d8d9',
			'5cb1492908d4970a8444d8db',
			'5cb1492908d4970a8444d8dd',
			'5cb1492a08d4970a8444d8df',
			'5cb1492a08d4970a8444d8e1',
			'5cb1492a08d4970a8444d8e3',
			'5cb1492a08d4970a8444d8e5',
			'5cb1492b08d4970a8444d8e7',
			'5cb1492b08d4970a8444d8e9',
			'5cb1492b08d4970a8444d8eb',
			'5cb1492b08d4970a8444d8ed',
			'5cb1492c08d4970a8444d8ef',
			'5cb1492c08d4970a8444d8f1',
			'5cb1492c08d4970a8444d8f3',
			'5cb1492d08d4970a8444d8f5',
			'5cb1492d08d4970a8444d8f7',
			'5cb1492d08d4970a8444d8f9',
			'5cb1492d08d4970a8444d8fb',
			'5cb1492e08d4970a8444d8fd',
			'5cb1492e08d4970a8444d8ff',
			'5cb1492e08d4970a8444d901',
			'5cb1492f08d4970a8444d903',
			'5cb1492f08d4970a8444d905',
			'5cb1492f08d4970a8444d907',
			'5cb1492f08d4970a8444d909',
			'5cb1493008d4970a8444d90b',
			'5cb1493008d4970a8444d90d',
			'5cb1493008d4970a8444d90f',
			'5cb1493008d4970a8444d911',
			'5cb1493108d4970a8444d913',
			'5cb1493108d4970a8444d915',
			'5cb1493108d4970a8444d917',
			'5cb1493208d4970a8444d919',
			'5cb1493208d4970a8444d91b',
			'5cb1493208d4970a8444d91d',
			'5cb1493208d4970a8444d91f',
			'5cb1493308d4970a8444d921',
			'5cb1493308d4970a8444d923',
			'5cb1493308d4970a8444d925',
			'5cb1493308d4970a8444d927',
			'5cb1493408d4970a8444d929',
			'5cb1493408d4970a8444d92b',
			'5cb1493408d4970a8444d92d',
			'5cb1493508d4970a8444d92f',
			'5cb1493508d4970a8444d931',
			'5cb1493508d4970a8444d933',
			'5cb1493508d4970a8444d935',
			'5cb1493608d4970a8444d937',
			'5cb1493608d4970a8444d939',
			'5cb1493608d4970a8444d93b',
			'5cb1493708d4970a8444d93d',
			'5cb1493708d4970a8444d93f',
			'5cb1493708d4970a8444d941',
			'5cb1493708d4970a8444d943',
			'5cb1493808d4970a8444d945',
			'5cb1493808d4970a8444d947',
			'5cb1493808d4970a8444d949',
			'5cb1493808d4970a8444d94b',
			'5cb1493908d4970a8444d94d',
			'5cb1493908d4970a8444d94f',
			'5cb1493908d4970a8444d951',
			'5cb1493a08d4970a8444d953',
			'5cb1493a08d4970a8444d955',
			'5cb1493a08d4970a8444d957',
			'5cb1493a08d4970a8444d959',
			'5cb1493b08d4970a8444d95b',
			'5cb1493b08d4970a8444d95d',
			'5cb1493b08d4970a8444d95f',
			'5cb1493c08d4970a8444d961',
			'5cb1493c08d4970a8444d963',
			'5cb1493c08d4970a8444d965',
			'5cb1493c08d4970a8444d967',
			'5cb1493d08d4970a8444d969',
			'5cb1493d08d4970a8444d96b',
			'5cb1493d08d4970a8444d96d',
			'5cb1493e08d4970a8444d96f',
			'5cb1493f08d4970a8444d971',
			'5cb1493f08d4970a8444d973',
			'5cb1494008d4970a8444d975',
			'5cb1494108d4970a8444d977',
			'5cb1494108d4970a8444d979',
			'5cb1494208d4970a8444d97b'
		],
		carriersIds: [],
		geoLocation: {
			city: 'Ashdod',
			streetAddress: 'HaAtsmaut',
			house: '128',
			__typename: 'GeoLocation'
		},
		__typename: 'Warehouse',
		barcodeData: '5cb1494408d4970a8444d981'
	}
];
