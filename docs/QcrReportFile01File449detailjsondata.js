console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java 55 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "SimpleMemoryPoolAutoCloseable"
 , "c2" : "org.apache.kafka.common.memory.GarbageCollectedMemoryPool"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.memory.GarbageCollectedMemoryPool" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "GarbageCollectedMemoryPool"
 , "c2" : "GarbageCollectedMemoryPool(long;int;boolean;Sensor)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "bufferToBeReturned(ByteBuffer)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "bufferToBeReleased(ByteBuffer)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "30"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.GarbageCollectedMemoryPool@POLYN176685 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.GarbageCollectedMemoryPool@POLYN176685 the MagicNumber/String  'memory pool GC listener' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.GarbageCollectedMemoryPool@POLYN176685 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method bufferToBeReturned arguments ByteBuffer  justAllocated"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#34"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00034] The argument justAllocated is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReturned@POLYN177301 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReturned@POLYN177301 the MagicNumber/String  'allocated buffer identity ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReturned@POLYN177301 the MagicNumber/String  ' already registered as in use?!' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReturned@POLYN177301 the MagicNumber/String  'allocated buffer of size {} and identity {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method bufferToBeReleased arguments ByteBuffer  justReleased"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#46"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00046] The argument justReleased is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReleased@POLYN177977 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReleased@POLYN177977 the MagicNumber/String  'returned buffer ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReleased@POLYN177977 the MagicNumber/String  ' was never allocated by this pool' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReleased@POLYN177977 the MagicNumber/String  'buffer ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReleased@POLYN177977 the MagicNumber/String  ' has capacity ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReleased@POLYN177977 the MagicNumber/String  ' but recorded as ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReleased@POLYN177977 the MagicNumber/String  'released buffer of size {} and identity {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.close@POLYN178884 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00066] The class GarbageCollectionListener contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00071] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00071] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00076] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00088] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.GarbageCollectionListener.run@POLYN179093 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.GarbageCollectionListener.run@POLYN179093 the MagicNumber/String  'Reclaimed buffer of size {} and identity {} that was not properly release()ed. This is a bug.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.GarbageCollectionListener.run@POLYN179093 the MagicNumber/String  'interrupted' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.GarbageCollectionListener.run@POLYN179093 the MagicNumber/String  'GC listener shutting down' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00097] The class BufferMetadata contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.BufferReference.BufferReference@POLYN180298 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00118] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00122] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.BufferReference.equals@POLYN180752 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.BufferReference.equals@POLYN180752 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.BufferReference.equals@POLYN180752 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.BufferReference.equals@POLYN180752 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.BufferReference.equals@POLYN180752 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.BufferReference.equals@POLYN180752 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.toString@POLYN181737 the MagicNumber/String  'GarbageCollectedMemoryPool{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.toString@POLYN181737 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.toString@POLYN181737 the MagicNumber/String  ' used in ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.toString@POLYN181737 the MagicNumber/String  ' buffers}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReleased@POLYN177977"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReturned@POLYN177301"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#49"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00049] In the recursive method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReleased@POLYN177977 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#52"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00052] In the recursive method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReleased@POLYN177977 the MagicNumber/String ' was never allocated by this pool' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#52"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00052] In the recursive method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReleased@POLYN177977 the MagicNumber/String 'returned buffer ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#55"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00055] In the recursive method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReleased@POLYN177977 the MagicNumber/String ' but recorded as ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#55"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00055] In the recursive method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReleased@POLYN177977 the MagicNumber/String ' has capacity ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#55"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00055] In the recursive method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReleased@POLYN177977 the MagicNumber/String 'buffer ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00057] In the recursive method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReleased@POLYN177977 the MagicNumber/String 'released buffer of size {} and identity {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#37"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00037] In the recursive method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReturned@POLYN177301 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#40"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00040] In the recursive method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReturned@POLYN177301 the MagicNumber/String ' already registered as in use?!' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#40"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00040] In the recursive method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReturned@POLYN177301 the MagicNumber/String 'allocated buffer identity ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/GarbageCollectedMemoryPool.java.html#42"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00042] In the recursive method org.apache.kafka.common.memory.GarbageCollectedMemoryPool.bufferToBeReturned@POLYN177301 the MagicNumber/String 'allocated buffer of size {} and identity {}' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
