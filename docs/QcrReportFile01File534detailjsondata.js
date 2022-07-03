console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java 56 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.protocol.types.Field"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.protocol.types.Field" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Field"
 , "c2" : "Field(String;Type;String;boolean;Object)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Field"
 , "c2" : "Field(String;Type;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Field"
 , "c2" : "Field(String;Type;String;Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Field"
 , "c2" : "Field(String;Type)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.svg" }

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
"data13a" : [
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
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
 , "c4" : "49"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00004"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#4"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00004] The class Field contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00011"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#11"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00011] The argument type is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method org.apache.kafka.common.protocol.types.Field.Field@POLYN189243 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method org.apache.kafka.common.protocol.types.Field.Field@POLYN189243 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.common.protocol.types.Field.Field@POLYN189502 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.common.protocol.types.Field.Field@POLYN189784 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.common.protocol.types.Field.Field@POLYN189784 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.common.protocol.types.Field.Field@POLYN189784 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.common.protocol.types.Field.Int8.Int8@POLYN190069 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.common.protocol.types.Field.Int8.Int8@POLYN190069 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.common.protocol.types.Field.Int8.Int8@POLYN190315 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.common.protocol.types.Field.Int32.Int32@POLYN190636 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.common.protocol.types.Field.Int32.Int32@POLYN190636 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.common.protocol.types.Field.Int32.Int32@POLYN190882 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.protocol.types.Field.Int64.Int64@POLYN191203 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.protocol.types.Field.Int64.Int64@POLYN191203 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.common.protocol.types.Field.Int64.Int64@POLYN191449 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.common.protocol.types.Field.UUID.UUID@POLYN191770 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.common.protocol.types.Field.UUID.UUID@POLYN191770 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.common.protocol.types.Field.UUID.UUID@POLYN192016 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.common.protocol.types.Field.Int16.Int16@POLYN192337 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.common.protocol.types.Field.Int16.Int16@POLYN192337 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.common.protocol.types.Field.Uint16.Uint16@POLYN192635 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.common.protocol.types.Field.Uint16.Uint16@POLYN192635 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.common.protocol.types.Field.Uint32.Uint32@POLYN192933 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.common.protocol.types.Field.Uint32.Uint32@POLYN192933 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.common.protocol.types.Field.Float64.Float64@POLYN193231 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.common.protocol.types.Field.Float64.Float64@POLYN193231 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.common.protocol.types.Field.Float64.Float64@POLYN193477 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.common.protocol.types.Field.Str.Str@POLYN193798 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.common.protocol.types.Field.Str.Str@POLYN193798 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.protocol.types.Field.CompactStr.CompactStr@POLYN194096 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.protocol.types.Field.CompactStr.CompactStr@POLYN194096 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.common.protocol.types.Field.NullableStr.NullableStr@POLYN194394 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.common.protocol.types.Field.NullableStr.NullableStr@POLYN194394 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.common.protocol.types.Field.CompactNullableStr.CompactNullableStr@POLYN194692 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.common.protocol.types.Field.CompactNullableStr.CompactNullableStr@POLYN194692 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.common.protocol.types.Field.Bool.Bool@POLYN194990 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.common.protocol.types.Field.Bool.Bool@POLYN194990 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.common.protocol.types.Field.Array.Array@POLYN195288 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.common.protocol.types.Field.Array.Array@POLYN195288 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.common.protocol.types.Field.CompactArray.CompactArray@POLYN195641 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.common.protocol.types.Field.CompactArray.CompactArray@POLYN195641 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#148"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00148] For method of arguments Object  ...fields"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.common.protocol.types.Field.TaggedFieldsSection.TaggedFieldsSection@POLYN196495 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.common.protocol.types.Field.TaggedFieldsSection.TaggedFieldsSection@POLYN196495 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00157] The class ComplexArray contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#166"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00166] For method withFields arguments Field  ...fields"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.common.protocol.types.Field.ComplexArray.withFields@POLYN197062 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.common.protocol.types.Field.ComplexArray.withFields@POLYN197062 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#171"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00171] For method nullableWithFields arguments Field  ...fields"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.common.protocol.types.Field.ComplexArray.nullableWithFields@POLYN197434 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.common.protocol.types.Field.ComplexArray.nullableWithFields@POLYN197434 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#176"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00176] For method withFields arguments String  docStringOverride|Field  ...fields"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.common.protocol.types.Field.ComplexArray.withFields@POLYN197807 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Field.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.common.protocol.types.Field.ComplexArray.withFields@POLYN197807 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
