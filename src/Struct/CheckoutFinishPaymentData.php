<?php

declare(strict_types=1);

namespace PayonePayment\Struct;

use PayonePayment\DataAbstractionLayer\Entity\Mandate\PayonePaymentMandateEntity;
use Shopware\Core\Framework\Struct\Struct;

class CheckoutFinishPaymentData extends Struct
{
    /** @var null|PayonePaymentMandateEntity */
    protected $mandate;

    public function getMandate(): ?PayonePaymentMandateEntity
    {
        return $this->mandate;
    }
}