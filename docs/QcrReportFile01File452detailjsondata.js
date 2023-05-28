console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java 49 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "MemoryPool"
 , "c2" : "org.apache.kafka.common.memory.SimpleMemoryPool"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.memory.SimpleMemoryPool" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#42"
 , "c1" : "SimpleMemoryPool"
 , "c2" : "SimpleMemoryPool(long;int;boolean;Sensor)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#54"
 , "c1" : "ByteBuffer"
 , "c2" : "tryAllocate(int)"
 , "c3" : "8"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00088"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#88"
 , "c1" : "void"
 , "c2" : "release(ByteBuffer)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00098"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#98"
 , "c1" : "long"
 , "c2" : "size()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#103"
 , "c1" : "long"
 , "c2" : "availableMemory()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00108"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#108"
 , "c1" : "boolean"
 , "c2" : "isOutOfMemory()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00113"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#113"
 , "c1" : "void"
 , "c2" : "bufferToBeReturned(ByteBuffer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00118"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#118"
 , "c1" : "void"
 , "c2" : "bufferToBeReleased(ByteBuffer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00123"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#123"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00128"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#128"
 , "c1" : "void"
 , "c2" : "maybeRecordEndOfDrySpell()"
 , "c3" : "3"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "11"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "29"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.common.memory.SimpleMemoryPool.SimpleMemoryPool@POLYN165903 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.common.memory.SimpleMemoryPool.SimpleMemoryPool@POLYN165903 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.common.memory.SimpleMemoryPool.SimpleMemoryPool@POLYN165903 the MagicNumber/String  'must provide a positive size and max single allocation size smaller than size.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.common.memory.SimpleMemoryPool.SimpleMemoryPool@POLYN165903 the MagicNumber/String  'provided ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.common.memory.SimpleMemoryPool.SimpleMemoryPool@POLYN165903 the MagicNumber/String  ' and ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.common.memory.SimpleMemoryPool.SimpleMemoryPool@POLYN165903 the MagicNumber/String  ' respectively' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method tryAllocate arguments int  sizeBytes"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00054] For method tryAllocate list of called methods Object monObjet|V availableMemory_getN167446"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00066] Assigning instead of comparing on available=availableMemory.get() (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758 the MagicNumber/String  'requested size ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758 the MagicNumber/String  '&amp;lt;=0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758 the MagicNumber/String  'requested size ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758 the MagicNumber/String  ' is larger than maxSingleAllocationSize ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758 the MagicNumber/String  'refused to allocate buffer of size {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method release arguments ByteBuffer  previouslyAllocated"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.common.memory.SimpleMemoryPool.release@POLYN168357 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.common.memory.SimpleMemoryPool.release@POLYN168357 the MagicNumber/String  'provided null buffer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.memory.SimpleMemoryPool.isOutOfMemory@POLYN168991 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#113"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00113] For method bufferToBeReturned arguments ByteBuffer  justAllocated"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#113"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00113] The argument justAllocated is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.common.memory.SimpleMemoryPool.bufferToBeReturned@POLYN169113 the MagicNumber/String  'allocated buffer of size {} ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00118] For method bufferToBeReleased arguments ByteBuffer  justReleased"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#118"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00118] The argument justReleased is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.common.memory.SimpleMemoryPool.bufferToBeReleased@POLYN169291 the MagicNumber/String  'released buffer of size {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.common.memory.SimpleMemoryPool.toString@POLYN169491 the MagicNumber/String  'SimpleMemoryPool{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.common.memory.SimpleMemoryPool.toString@POLYN169491 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.common.memory.SimpleMemoryPool.toString@POLYN169491 the MagicNumber/String  ' used}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.common.memory.SimpleMemoryPool.maybeRecordEndOfDrySpell@POLYN169840 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.common.memory.SimpleMemoryPool.maybeRecordEndOfDrySpell@POLYN169840 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.common.memory.SimpleMemoryPool.maybeRecordEndOfDrySpell@POLYN169840 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.common.memory.SimpleMemoryPool.maybeRecordEndOfDrySpell@POLYN169840 the MagicNumber/String  1000000.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#55"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00055] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#56"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00056] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758 the MagicNumber/String '&amp;lt;=0' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#56"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00056] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758 the MagicNumber/String 'requested size ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#58"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00058] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758 the MagicNumber/String ' is larger than maxSingleAllocationSize ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#58"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00058] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758 the MagicNumber/String 'requested size ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00061] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#65"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00065] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#75"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00075] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#76"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00076] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#78"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00078] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758 the MagicNumber/String 'refused to allocate buffer of size {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#79"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00079] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN166758 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
