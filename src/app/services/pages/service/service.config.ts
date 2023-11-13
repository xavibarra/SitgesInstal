export interface Service {
  title: string;
  imgDesktop: string;
  imgMobile: string;
  imgAlt: string;
  description: ServiceDescription;
}

interface ServiceDescription {
  title: string;
  span1: string;
  span2: string;
  span3: string;
  span4: string;
}

export const SERVICES: Record<string, Service> = {
  'air-conditioning': {
    title: 'airConditioning.title',
    imgDesktop: 'assets/img/services-airConditioning.jpg',
    imgMobile: 'assets/img/air-conditioning.jpg',
    imgAlt: 'Air conditioning instalation',
    description: {
      title: 'airConditioning.name',
      span1: 'airConditioning.one',
      span2: 'airConditioning.two',
      span3: 'airConditioning.three',
      span4: 'airConditioning.four',
    },
  },

  // TODO the same with other services
};
