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
    imgDesktop: 'assets/img/air-conditioning.jpg',
    imgMobile: 'assets/img/services-airConditioning.jpg',
    imgAlt: 'Air conditioning instalation',
    description: {
      title: 'airConditioning.name',
      span1: 'airConditioning.one',
      span2: 'airConditioning.two',
      span3: 'airConditioning.three',
      span4: 'airConditioning.four',
    },
  },
  electrical: {
    title: 'electrical.title',
    imgDesktop: 'assets/img/electrical-instalation1.jpg',
    imgMobile: 'assets/img/electrical-instalation2.jpg',
    imgAlt: 'Electrical instalation',
    description: {
      title: 'electrical.name',
      span1: 'electrical.one',
      span2: 'electrical.two',
      span3: 'electrical.three',
      span4: 'electrical.four',
    },
  },
  gas: {
    title: 'gas.title',
    imgDesktop: 'assets/img/services-gas.jpg',
    imgMobile: 'assets/img/services-gas.jpg',
    imgAlt: 'Gas instalation',
    description: {
      title: 'gas.name',
      span1: 'gas.one',
      span2: 'gas.two',
      span3: 'gas.three',
      span4: 'gas.four',
    },
  },
  heating: {
    title: 'heating.title',
    imgDesktop: 'assets/img/services-heating.jpg',
    imgMobile: 'assets/img/services-heating.jpg',
    imgAlt: 'Heating instalation',
    description: {
      title: 'heating.name',
      span1: 'heating.one',
      span2: 'heating.two',
      span3: 'heating.three',
      span4: 'heating.four',
    },
  },
  plumbing: {
    title: 'plumbing.title',
    imgDesktop: 'assets/img/plumbing1.jpg',
    imgMobile: 'assets/img/plumbing2.jpg',
    imgAlt: 'Plumbing instalation',
    description: {
      title: 'plumbing.name',
      span1: 'plumbing.one',
      span2: 'plumbing.two',
      span3: 'plumbing.three',
      span4: 'plumbing.four',
    },
  },
  reforms: {
    title: 'reforms.title',
    imgDesktop: 'assets/img/reforms1.jpg',
    imgMobile: 'assets/img/repairs.jpg',
    imgAlt: 'Reforms',
    description: {
      title: 'reforms.name',
      span1: 'reforms.one',
      span2: 'reforms.two',
      span3: 'reforms.three',
      span4: 'reforms.four',
    },
  },
  repairs: {
    title: 'repairs.title',
    imgDesktop: 'assets/img/reforms1.jpg',
    imgMobile: 'assets/img/repairs.jpg',
    imgAlt: 'Repairs',
    description: {
      title: 'repairs.name',
      span1: 'repairs.one',
      span2: 'repairs.two',
      span3: 'repairs.three',
      span4: 'repairs.four',
    },
  },
  'solar-panels': {
    title: 'solarPanels.title',
    imgDesktop: 'assets/img/panel6.jpeg',
    imgMobile: 'assets/img/panel4.jpg',
    imgAlt: 'Solar panels instalation',
    description: {
      title: 'solarPanels.name',
      span1: 'solarPanels.one',
      span2: 'solarPanels.two',
      span3: 'solarPanels.three',
      span4: 'solarPanels.four',
    },
  },
};
