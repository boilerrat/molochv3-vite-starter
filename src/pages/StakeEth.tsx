import { useDHConnect } from '@daohaus/connect';
import { FormBuilder } from '@daohaus/form-builder';
import { TXBuilder } from '@daohaus/tx-builder';

import { FORM } from '../legos/forms';

export const Stakeeth = () => {
  const { provider } = useDHConnect();

  return (
    <TXBuilder
      provider={provider}
      chainId="0x5"
      daoId="0x67c1bc837554360a3c2175ee8dd2f3b5d15c7ff3"
      safeId="0x7fe54001b5d0f0d165e0aeffcdce2340fdf8f731"
      appState={{}}
    >
      <FormBuilder form={FORM.SIGNAL} targetNetwork="0x5" />
    </TXBuilder>
  );
};