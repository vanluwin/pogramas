import numpy as np 
import time

def nonlin(x, deriv=False):
    if(deriv):
        return x*(1-x)
    
    return 1/(1 + np.exp(-x) )

#input data
X = np.array([[0, 0, 1],
             [0, 1, 1],
             [1, 0, 1],
             [1, 1, 1]])

#output data
y = np.array([[0],
              [1],
              [1],
              [0]])

np.random.seed(1)

#synapses
syn0 = 2 * np.random.random((3,4)) - 1
syn1 = 2 * np.random.random((4,1)) - 1

#traning step
start = time.clock()
error = 1
while(error > 1e-10 ):
    for i in  xrange(60000):
        l0 = X 
        l1 = nonlin( np.dot(l0, syn0)  )
        l2 = nonlin( np.dot(l1, syn1) )

        l2_error = y - l2

        error = np.mean( np.abs(l2_error) )

        if(i % 10000 == 0):
            print "Error: " + str( np.mean( np.abs(l2_error) ) )

        l2_delta = l2_error * nonlin(l2, deriv=True)  

        l1_error = l2_delta.dot(syn1.T)

        l1_delta = l1_error * nonlin(l1, deriv=True)

        #update wights (Gradient Descent )
        syn0 += l0.T.dot(l1_delta)
        syn1 += l1.T.dot(l2_delta)

end = time.clock()
print "Output after traning for {:.2f}s".format(end-start)
print l2


