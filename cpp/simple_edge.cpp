#include "opencv2/core/utility.hpp"
#include "opencv2/imgproc.hpp"
#include "opencv2/imgcodecs.hpp"
#include "opencv2/highgui.hpp"
#include <stdio.h>

using namespace cv;
using namespace std;

int edgeThresh = 100;

int edgeThreshScharr=100;

int main(){
    Mat image, gray, blurImage, edge, cedge;
    
    image = imread("/home/richard/Pictures/fa.png");
    cedge.create(image.size(), image.type());
    cvtColor(image, gray, COLOR_BGR2GRAY);

    blur(gray, blurImage, Size(3,3));
    // Run the edge detector on grayscale
    Canny(blurImage, edge, edgeThresh, edgeThresh*3, 3);
    cedge = Scalar::all(0);
    image.copyTo(cedge, edge);
    imshow("Original", image);
    imshow("window_name", cedge);

    waitKey(0);
    return 0;
}
