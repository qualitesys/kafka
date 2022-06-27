console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java 56 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "DocumentedType"
 , "c2" : "org.apache.kafka.common.protocol.types.ArrayOf"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.protocol.types.ArrayOf" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ArrayOf"
 , "c2" : "ArrayOf(Type)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ArrayOf"
 , "c2" : "nullable(Type)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ArrayOf"
 , "c2" : "ArrayOf(Type;boolean)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isNullable()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "write(ByteBuffer;Object)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Object"
 , "c2" : "read(ByteBuffer)"
 , "c3" : "6"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "sizeOf(Object)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Optional<Type>"
 , "c2" : "arrayElementType()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Object[]"
 , "c2" : "validate(Object)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "typeName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "documentation()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.svg" }

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
 , "c4" : "16"
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
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "27"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00018] In method org.apache.kafka.common.protocol.types.ArrayOf.ArrayOf@POLYN171658 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#21"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00021] For method nullable arguments Type  type"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method org.apache.kafka.common.protocol.types.ArrayOf.nullable@POLYN171815 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method write arguments ByteBuffer  buffer|Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#36"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00036] The argument buffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.common.protocol.types.ArrayOf.write@POLYN172304 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.common.protocol.types.ArrayOf.write@POLYN172304 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method read arguments ByteBuffer  buffer"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00051] For method read list of called methods Object monObjet|Object type_readN173963"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#51"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00051] The argument buffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.common.protocol.types.ArrayOf.read@POLYN172958 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.common.protocol.types.ArrayOf.read@POLYN172958 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.protocol.types.ArrayOf.read@POLYN172958 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.common.protocol.types.ArrayOf.read@POLYN172958 the MagicNumber/String  'Array size ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.common.protocol.types.ArrayOf.read@POLYN172958 the MagicNumber/String  ' cannot be negative' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.common.protocol.types.ArrayOf.read@POLYN172958 the MagicNumber/String  'Error reading array of size ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.common.protocol.types.ArrayOf.read@POLYN172958 the MagicNumber/String  ', only ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.common.protocol.types.ArrayOf.read@POLYN172958 the MagicNumber/String  ' bytes available' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.common.protocol.types.ArrayOf.read@POLYN172958 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method sizeOf arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00067] For method sizeOf list of called methods Object monObjet|int type_sizeOfN174471"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.common.protocol.types.ArrayOf.sizeOf@POLYN174082 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.common.protocol.types.ArrayOf.sizeOf@POLYN174082 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.common.protocol.types.ArrayOf.toString@POLYN174750 the MagicNumber/String  '(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.common.protocol.types.ArrayOf.toString@POLYN174750 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method validate arguments Object  item"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.common.protocol.types.ArrayOf.validate@POLYN174926 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.common.protocol.types.ArrayOf.validate@POLYN174926 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.common.protocol.types.ArrayOf.validate@POLYN174926 the MagicNumber/String  'Not an Object[].' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.common.protocol.types.ArrayOf.documentation@POLYN175632 the MagicNumber/String  'Represents a sequence of objects of a given type T. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.common.protocol.types.ArrayOf.documentation@POLYN175632 the MagicNumber/String  'Type T can be either a primitive type (e.g. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.common.protocol.types.ArrayOf.documentation@POLYN175632 the MagicNumber/String  ') or a structure. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.common.protocol.types.ArrayOf.documentation@POLYN175632 the MagicNumber/String  'First, the length N is given as an ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.common.protocol.types.ArrayOf.documentation@POLYN175632 the MagicNumber/String  '. Then N instances of type T follow. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.common.protocol.types.ArrayOf.documentation@POLYN175632 the MagicNumber/String  'A null array is represented with a length of -1. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.common.protocol.types.ArrayOf.documentation@POLYN175632 the MagicNumber/String  'In protocol documentation an array of T instances is referred to as [T].' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.protocol.types.ArrayOf.read@POLYN172958"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.protocol.types.ArrayOf.sizeOf@POLYN174082"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.protocol.types.ArrayOf.validate@POLYN174926"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.protocol.types.ArrayOf.write@POLYN172304"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#53"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00053] In the recursive method org.apache.kafka.common.protocol.types.ArrayOf.read@POLYN172958 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#54"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00054] In the recursive method org.apache.kafka.common.protocol.types.ArrayOf.read@POLYN172958 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#55"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00055] In the recursive method org.apache.kafka.common.protocol.types.ArrayOf.read@POLYN172958 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#56"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00056] In the recursive method org.apache.kafka.common.protocol.types.ArrayOf.read@POLYN172958 the MagicNumber/String ' cannot be negative' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#56"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00056] In the recursive method org.apache.kafka.common.protocol.types.ArrayOf.read@POLYN172958 the MagicNumber/String 'Array size ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#59"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00059] In the recursive method org.apache.kafka.common.protocol.types.ArrayOf.read@POLYN172958 the MagicNumber/String ' bytes available' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#59"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00059] In the recursive method org.apache.kafka.common.protocol.types.ArrayOf.read@POLYN172958 the MagicNumber/String ', only ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#59"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00059] In the recursive method org.apache.kafka.common.protocol.types.ArrayOf.read@POLYN172958 the MagicNumber/String 'Error reading array of size ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00061] In the recursive method org.apache.kafka.common.protocol.types.ArrayOf.read@POLYN172958 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method org.apache.kafka.common.protocol.types.ArrayOf.sizeOf@POLYN174082 the MagicNumber/String 4 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#69"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00069] In the recursive method org.apache.kafka.common.protocol.types.ArrayOf.sizeOf@POLYN174082 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#91"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00091] In the recursive method org.apache.kafka.common.protocol.types.ArrayOf.validate@POLYN174926 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#92"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00092] In the recursive method org.apache.kafka.common.protocol.types.ArrayOf.validate@POLYN174926 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#99"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00099] In the recursive method org.apache.kafka.common.protocol.types.ArrayOf.validate@POLYN174926 the MagicNumber/String 'Not an Object[].' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#37"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00037] In the recursive method org.apache.kafka.common.protocol.types.ArrayOf.write@POLYN172304 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/ArrayOf.java.html#38"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00038] In the recursive method org.apache.kafka.common.protocol.types.ArrayOf.write@POLYN172304 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
