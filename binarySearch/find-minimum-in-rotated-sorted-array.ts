    findMin(nums: number[]): number {

    //originally sorted ascending order 0,1,2,3,4
    // rotated once     1, 2, 3, 4, 0
    // rotated twice    2, 3, 4, 0, 1
    // 5, 0, 1, 2, 3, 4
    // all numbers are unique, return Min of this array
        let left  = 0;
        let right = nums.length - 1; 

        if(nums.length < 2){
            return nums[0]
        }

        if (nums[left] < nums[right]){
            return nums[0];
        }
        while( left <= right ){
            const mid = left + Math.floor((right-left)/2)
            if(nums[mid] < nums[mid - 1]){
                return nums[mid]
            } else if( nums[mid] < nums[left]){
                right = mid;
            } else if ( nums[mid] > nums[right] ){
                left = mid;
            }
        }   
    }