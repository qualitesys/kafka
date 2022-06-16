console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java 274 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "71"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "49"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "13"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "54"
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
 , "c4" : "85"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class Struct contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#24"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00024] The argument schema is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method getFieldOrDefault arguments BoundField  field"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.common.protocol.types.Struct.getFieldOrDefault@POLYN244038 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.common.protocol.types.Struct.getFieldOrDefault@POLYN244038 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.common.protocol.types.Struct.getFieldOrDefault@POLYN244038 the MagicNumber/String  'Missing value for field '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.common.protocol.types.Struct.getFieldOrDefault@POLYN244038 the MagicNumber/String  '' which has no default value.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method get arguments BoundField  field"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method get arguments Field.Int8  field"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#53"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00053] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method get arguments Field.Int32  field"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#57"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00057] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method get arguments Field.Int64  field"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#61"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00061] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method get arguments Field.UUID  field"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#65"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00065] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method get arguments Field.Uint16  field"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#69"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00069] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#73"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00073] For method get arguments Field.Uint32  field"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#73"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00073] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method get arguments Field.Int16  field"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#77"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00077] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method get arguments Field.Float64  field"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#81"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00081] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method get arguments Field.Str  field"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#85"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00085] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method get arguments Field.NullableStr  field"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#89"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00089] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#93"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00093] For method get arguments Field.Bool  field"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#93"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00093] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method get arguments Field.Array  field"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#97"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00097] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method get arguments Field.ComplexArray  field"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#101"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00101] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#105"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00105] For method getOrElse arguments Field.Int64  field|long  alternative"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#105"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00105] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#111"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00111] For method getOrElse arguments Field.UUID  field|Uuid  alternative"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#111"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00111] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#117"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00117] For method getOrElse arguments Field.Int16  field|short  alternative"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#117"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00117] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#123"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00123] For method getOrElse arguments Field.Int8  field|byte  alternative"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#123"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00123] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#129"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00129] For method getOrElse arguments Field.Int32  field|int  alternative"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#129"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00129] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00135] For method getOrElse arguments Field.Float64  field|double  alternative"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#135"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00135] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#141"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00141] For method getOrElse arguments Field.NullableStr  field|String  alternative"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#141"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00141] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#147"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00147] For method getOrElse arguments Field.Str  field|String  alternative"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#147"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00147] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#153"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00153] For method getOrElse arguments Field.Bool  field|boolean  alternative"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#153"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00153] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#159"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00159] For method getOrEmpty arguments Field.Array  field"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#159"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00159] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.common.protocol.types.Struct.getOrEmpty@POLYN249640 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#165"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00165] For method getOrEmpty arguments Field.ComplexArray  field"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#165"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00165] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.common.protocol.types.Struct.getOrEmpty@POLYN249945 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#172"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00172] For method get arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.common.protocol.types.Struct.get@POLYN250420 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.common.protocol.types.Struct.get@POLYN250420 the MagicNumber/String  'No such field: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#180"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00180] For method hasField arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.common.protocol.types.Struct.hasField@POLYN250892 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#184"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00184] For method hasField arguments Field  def"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#184"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00184] The argument def is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.common.protocol.types.Struct.hasField@POLYN251063 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#188"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00188] For method hasField arguments Field.ComplexArray  def"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#188"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00188] The argument def is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.common.protocol.types.Struct.hasField@POLYN251242 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#192"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00192] For method getStruct arguments BoundField  field"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#196"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00196] For method getStruct arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#200"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00200] For method getByte arguments BoundField  field"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#204"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00204] For method getByte arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#208"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00208] For method getRecords arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#212"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00212] For method getShort arguments BoundField  field"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#216"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00216] For method getShort arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#220"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00220] For method getUnsignedShort arguments BoundField  field"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#224"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00224] For method getUnsignedShort arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00228"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#228"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00228] For method getInt arguments BoundField  field"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#232"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00232] For method getInt arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#236"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00236] For method getUnsignedInt arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#240"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00240] For method getUnsignedInt arguments BoundField  field"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#244"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00244] For method getLong arguments BoundField  field"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#248"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00248] For method getLong arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#252"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00252] For method getUuid arguments BoundField  field"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#256"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00256] For method getUuid arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#260"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00260] For method getDouble arguments BoundField  field"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#264"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00264] For method getDouble arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#268"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00268] For method getArray arguments BoundField  field"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#272"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00272] For method getArray arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#276"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00276] For method getString arguments BoundField  field"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#280"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00280] For method getString arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#284"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00284] For method getBoolean arguments BoundField  field"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#288"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00288] For method getBoolean arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#292"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00292] For method getBytes arguments BoundField  field"
}} 
,
{ "ligne" : {
   "c1" : "00299"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#299"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00299] For method getBytes arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00306"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#306"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00306] For method getByteArray arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#318"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00318] For method set arguments BoundField  field|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#318"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00318] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00325"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#325"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00325] For method set arguments String  name|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00327"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method org.apache.kafka.common.protocol.types.Struct.set@POLYN257335 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00328"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#328"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00328] In method org.apache.kafka.common.protocol.types.Struct.set@POLYN257335 the MagicNumber/String  'Unknown field: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#333"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00333] For method set arguments Field.Str  def|String  value"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#333"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00333] The argument def is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#337"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00337] For method set arguments Field.NullableStr  def|String  value"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#337"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00337] The argument def is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00341"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#341"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00341] For method set arguments Field.Int8  def|byte  value"
}} 
,
{ "ligne" : {
   "c1" : "00341"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#341"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00341] The argument def is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00345"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#345"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00345] For method set arguments Field.Int32  def|int  value"
}} 
,
{ "ligne" : {
   "c1" : "00345"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#345"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00345] The argument def is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#349"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00349] For method set arguments Field.Int64  def|long  value"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#349"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00349] The argument def is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00353"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#353"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00353] For method set arguments Field.UUID  def|Uuid  value"
}} 
,
{ "ligne" : {
   "c1" : "00353"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#353"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00353] The argument def is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00357"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#357"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00357] For method set arguments Field.Int16  def|short  value"
}} 
,
{ "ligne" : {
   "c1" : "00357"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#357"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00357] The argument def is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00361"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#361"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00361] For method set arguments Field.Uint16  def|int  value"
}} 
,
{ "ligne" : {
   "c1" : "00361"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#361"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00361] The argument def is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method org.apache.kafka.common.protocol.types.Struct.set@POLYN259238 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00363"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#363"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00363] In method org.apache.kafka.common.protocol.types.Struct.set@POLYN259238 the MagicNumber/String  'Invalid value for unsigned short for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00364"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00364] In method org.apache.kafka.common.protocol.types.Struct.set@POLYN259238 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00369"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#369"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00369] For method set arguments Field.Uint32  def|long  value"
}} 
,
{ "ligne" : {
   "c1" : "00369"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#369"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00369] The argument def is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00370"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#370"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00370] In method org.apache.kafka.common.protocol.types.Struct.set@POLYN259709 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00371"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#371"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00371] In method org.apache.kafka.common.protocol.types.Struct.set@POLYN259709 the MagicNumber/String  'Invalid value for unsigned int for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00372"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#372"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00372] In method org.apache.kafka.common.protocol.types.Struct.set@POLYN259709 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#377"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00377] For method set arguments Field.Float64  def|double  value"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#377"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00377] The argument def is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#381"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00381] For method set arguments Field.Bool  def|boolean  value"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#381"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00381] The argument def is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00385"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#385"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00385] For method set arguments Field.Array  def|Object[]  value"
}} 
,
{ "ligne" : {
   "c1" : "00385"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#385"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00385] The argument def is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00389"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#389"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00389] For method set arguments Field.ComplexArray  def|Object[]  value"
}} 
,
{ "ligne" : {
   "c1" : "00389"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#389"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00389] The argument def is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#393"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00393] For method setByteArray arguments String  name|byte[]  value"
}} 
,
{ "ligne" : {
   "c1" : "00394"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.common.protocol.types.Struct.setByteArray@POLYN261000 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00394"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.common.protocol.types.Struct.setByteArray@POLYN261000 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#398"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00398] For method setIfExists arguments Field.Array  def|Object[]  value"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#398"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00398] The argument def is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#402"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00402] For method setIfExists arguments Field.ComplexArray  def|Object[]  value"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#402"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00402] The argument def is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00406"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#406"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00406] For method setIfExists arguments Field  def|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00406"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#406"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00406] The argument def is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00410"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#410"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00410] For method setIfExists arguments String  fieldName|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00412"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#412"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00412] In method org.apache.kafka.common.protocol.types.Struct.setIfExists@POLYN261966 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00418"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#418"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00418] For method instance arguments BoundField  field"
}} 
,
{ "ligne" : {
   "c1" : "00418"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#418"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00418] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00425"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#425"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00425] In method org.apache.kafka.common.protocol.types.Struct.instance@POLYN262653 the MagicNumber/String  'Field '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00425"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#425"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00425] In method org.apache.kafka.common.protocol.types.Struct.instance@POLYN262653 the MagicNumber/String  '' is not a container type, it is of type ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00430"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#430"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00430] For method instance arguments String  field"
}} 
,
{ "ligne" : {
   "c1" : "00434"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#434"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00434] For method instance arguments Field  field"
}} 
,
{ "ligne" : {
   "c1" : "00434"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#434"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00434] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00438"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#438"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00438] For method instance arguments Field.ComplexArray  field"
}} 
,
{ "ligne" : {
   "c1" : "00438"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#438"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00438] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00444"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#444"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00444] In method org.apache.kafka.common.protocol.types.Struct.clear@POLYN264198 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00453"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#453"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00453] For method writeTo arguments ByteBuffer  buffer"
}} 
,
{ "ligne" : {
   "c1" : "00458"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#458"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00458] For method validateField arguments BoundField  field"
}} 
,
{ "ligne" : {
   "c1" : "00458"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#458"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00458] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00459"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#459"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00459] In method org.apache.kafka.common.protocol.types.Struct.validateField@POLYN264809 the MagicNumber/String  '`field` must be non-null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00461"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#461"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00461] In method org.apache.kafka.common.protocol.types.Struct.validateField@POLYN264809 the MagicNumber/String  'Attempt to access field '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00461"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#461"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00461] In method org.apache.kafka.common.protocol.types.Struct.validateField@POLYN264809 the MagicNumber/String  '' from a different schema instance.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00463"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#463"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00463] In method org.apache.kafka.common.protocol.types.Struct.validateField@POLYN264809 the MagicNumber/String  'Invalid field index: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00476"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#476"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00476] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00480"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#480"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00480] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00480"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#480"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00480] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00474"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#474"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00474] In method org.apache.kafka.common.protocol.types.Struct.toString@POLYN265570 the MagicNumber/String  '{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00475"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#475"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00475] In method org.apache.kafka.common.protocol.types.Struct.toString@POLYN265570 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00478"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#478"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00478] In method org.apache.kafka.common.protocol.types.Struct.toString@POLYN265570 the MagicNumber/String  '=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00479"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#479"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00479] In method org.apache.kafka.common.protocol.types.Struct.toString@POLYN265570 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00481"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#481"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00481] In method org.apache.kafka.common.protocol.types.Struct.toString@POLYN265570 the MagicNumber/String  '[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00482"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#482"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00482] In method org.apache.kafka.common.protocol.types.Struct.toString@POLYN265570 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00484"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#484"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00484] In method org.apache.kafka.common.protocol.types.Struct.toString@POLYN265570 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00485"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#485"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00485] In method org.apache.kafka.common.protocol.types.Struct.toString@POLYN265570 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00487"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#487"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00487] In method org.apache.kafka.common.protocol.types.Struct.toString@POLYN265570 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00490"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#490"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00490] In method org.apache.kafka.common.protocol.types.Struct.toString@POLYN265570 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00491"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#491"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00491] In method org.apache.kafka.common.protocol.types.Struct.toString@POLYN265570 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00493"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#493"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00493] In method org.apache.kafka.common.protocol.types.Struct.toString@POLYN265570 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00502"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#502"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00502] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00505"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#505"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00505] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00505"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#505"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00505] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00506"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#506"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00506] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00510"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#510"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00510] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#499"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00499] In method org.apache.kafka.common.protocol.types.Struct.hashCode@POLYN267523 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00500"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#500"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00500] In method org.apache.kafka.common.protocol.types.Struct.hashCode@POLYN267523 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00501"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#501"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00501] In method org.apache.kafka.common.protocol.types.Struct.hashCode@POLYN267523 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00504"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#504"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00504] In method org.apache.kafka.common.protocol.types.Struct.hashCode@POLYN267523 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00511"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#511"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00511] In method org.apache.kafka.common.protocol.types.Struct.hashCode@POLYN267523 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00520"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#520"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00520] For method equals arguments Object  obj"
}} 
,
{ "ligne" : {
   "c1" : "00525"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#525"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00525] The same method call obj.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00531"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#531"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00531] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00534"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#534"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00534] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00534"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#534"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00534] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00536"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#536"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00536] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00537"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#537"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00537] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00522"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#522"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00522] In method org.apache.kafka.common.protocol.types.Struct.equals@POLYN268838 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00523"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#523"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00523] In method org.apache.kafka.common.protocol.types.Struct.equals@POLYN268838 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00524"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#524"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00524] In method org.apache.kafka.common.protocol.types.Struct.equals@POLYN268838 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00526"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#526"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00526] In method org.apache.kafka.common.protocol.types.Struct.equals@POLYN268838 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00529"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#529"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00529] In method org.apache.kafka.common.protocol.types.Struct.equals@POLYN268838 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00530"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#530"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00530] In method org.apache.kafka.common.protocol.types.Struct.equals@POLYN268838 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00541"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#541"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00541] In method org.apache.kafka.common.protocol.types.Struct.equals@POLYN268838 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#543"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00543] In method org.apache.kafka.common.protocol.types.Struct.equals@POLYN268838 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#48"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00048] Public method get is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#53"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00053] Public method get is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00057] Public method get is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00061] Public method get is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#65"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00065] Public method get is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#69"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00069] Public method get is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#73"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00073] Public method get is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#77"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00077] Public method get is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00081] Public method get is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#85"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00085] Public method get is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#89"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00089] Public method get is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#93"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00093] Public method get is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#97"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00097] Public method get is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00101] Public method get is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00105] Public method getOrElse is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#111"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00111] Public method getOrElse is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#117"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00117] Public method getOrElse is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#123"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00123] Public method getOrElse is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00129] Public method getOrElse is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#135"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00135] Public method getOrElse is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00141] Public method getOrElse is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00147] Public method getOrElse is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#153"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00153] Public method getOrElse is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#159"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00159] Public method getOrEmpty is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#165"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00165] Public method getOrEmpty is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#192"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00192] Public method getStruct is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#196"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00196] Public method getStruct is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#200"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00200] Public method getByte is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#204"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00204] Public method getByte is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#208"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00208] Public method getRecords is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#212"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00212] Public method getShort is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#216"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00216] Public method getShort is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#220"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00220] Public method getUnsignedShort is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#224"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00224] Public method getUnsignedShort is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00228"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#228"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00228] Public method getInt is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#232"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00232] Public method getInt is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#236"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00236] Public method getUnsignedInt is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#240"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00240] Public method getUnsignedInt is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#244"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00244] Public method getLong is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#248"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00248] Public method getLong is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#252"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00252] Public method getUuid is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#256"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00256] Public method getUuid is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#260"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00260] Public method getDouble is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#264"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00264] Public method getDouble is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#268"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00268] Public method getArray is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#272"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00272] Public method getArray is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#276"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00276] Public method getString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#280"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00280] Public method getString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#284"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00284] Public method getBoolean is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#288"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00288] Public method getBoolean is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00292] Public method getBytes is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00299"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#299"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00299] Public method getBytes is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00306"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#306"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00306] Public method getByteArray is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#333"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00333] Public method set is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#337"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00337] Public method set is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00341"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#341"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00341] Public method set is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00345"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#345"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00345] Public method set is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#349"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00349] Public method set is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00353"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#353"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00353] Public method set is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00357"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#357"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00357] Public method set is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00361"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#361"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00361] Public method set is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00369"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#369"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00369] Public method set is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#377"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00377] Public method set is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#381"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00381] Public method set is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00385"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#385"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00385] Public method set is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00389"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#389"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00389] Public method set is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#393"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00393] Public method setByteArray is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#398"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00398] Public method setIfExists is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#402"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00402] Public method setIfExists is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00406"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#406"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00406] Public method setIfExists is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00418"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Struct.java.html#418"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00418] Public method instance is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
