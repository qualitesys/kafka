console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java 61 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.xml" 
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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "8"
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
 , "c4" : "33"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "8"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00036] The class ClientQuotaControlManager contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.controller.ClientQuotaControlManager.ClientQuotaControlManager@POLYN208919 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method alterClientQuotas arguments Collection&lt;ClientQuotaAlteration &gt;  quotaAlterations"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#48"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00048] The argument quotaAlterations is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.controller.ClientQuotaControlManager.alterClientQuotas@POLYN209467 the MagicNumber/String  'Duplicate quota key ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.controller.ClientQuotaControlManager.alterClientQuotas@POLYN209467 the MagicNumber/String  ' not updating quota for this entity ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.controller.ClientQuotaControlManager.alterClientQuotas@POLYN209467 the MagicNumber/String  'Ignoring duplicate entity ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method replay arguments ClientQuotaRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#76"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00076] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.controller.ClientQuotaControlManager.replay@POLYN211393 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.controller.ClientQuotaControlManager.replay@POLYN211393 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.controller.ClientQuotaControlManager.replay@POLYN211393 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.controller.ClientQuotaControlManager.replay@POLYN211393 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#95"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00095] For method alterClientQuotaEntity arguments ClientQuotaEntity  entity|Map&lt;String ,Double &gt;  newQuotaConfigs|List&lt;ApiMessageAndVersion &gt;  outputRecords|Map&lt;ClientQuotaEntity ,ApiError &gt;  outputResults"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#97"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00097] The argument newQuotaConfigs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#98"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00098] The argument outputRecords is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#99"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00099] The argument outputResults is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00128] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00129] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00140] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00145] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.controller.ClientQuotaControlManager.alterClientQuotaEntity@POLYN212807 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.controller.ClientQuotaControlManager.alterClientQuotaEntity@POLYN212807 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.controller.ClientQuotaControlManager.alterClientQuotaEntity@POLYN212807 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.controller.ClientQuotaControlManager.alterClientQuotaEntity@POLYN212807 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#162"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00162] For method configKeysForEntityType arguments Map&lt;String ,String &gt;  entity|Map&lt;String ,ConfigDef.ConfigKey &gt;  output"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#162"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00162] The argument entity is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#162"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00162] The argument output is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.controller.ClientQuotaControlManager.configKeysForEntityType@POLYN216513 the MagicNumber/String  'Invalid quota entity combination, IP entity should' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.controller.ClientQuotaControlManager.configKeysForEntityType@POLYN216513 the MagicNumber/String  'not be combined with User or ClientId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.controller.ClientQuotaControlManager.configKeysForEntityType@POLYN216513 the MagicNumber/String  ' is not a valid IP or resolvable host.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.controller.ClientQuotaControlManager.configKeysForEntityType@POLYN216513 the MagicNumber/String  'Invalid empty client quota entity' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#195"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00195] For method validateQuotaKeyValue arguments Map&lt;String ,ConfigDef.ConfigKey &gt;  validKeys|String  key|Double  value"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#195"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00195] The argument validKeys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.controller.ClientQuotaControlManager.validateQuotaKeyValue@POLYN218452 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.controller.ClientQuotaControlManager.validateQuotaKeyValue@POLYN218452 the MagicNumber/String  'Invalid configuration key ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.controller.ClientQuotaControlManager.validateQuotaKeyValue@POLYN218452 the MagicNumber/String  1e-6 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.controller.ClientQuotaControlManager.validateQuotaKeyValue@POLYN218452 the MagicNumber/String  'Configuration ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.controller.ClientQuotaControlManager.validateQuotaKeyValue@POLYN218452 the MagicNumber/String  ' must be a Long value' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.controller.ClientQuotaControlManager.validateQuotaKeyValue@POLYN218452 the MagicNumber/String  'Unexpected config type ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.controller.ClientQuotaControlManager.validateQuotaKeyValue@POLYN218452 the MagicNumber/String  ' should be Long or Double' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#225"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00225] For method isValidIpEntity arguments String  ip"
}} 
,
{ "ligne" : {
   "c1" : "00229"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.controller.ClientQuotaControlManager.isValidIpEntity@POLYN219880 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.controller.ClientQuotaControlManager.isValidIpEntity@POLYN219880 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00234] In method org.apache.kafka.controller.ClientQuotaControlManager.isValidIpEntity@POLYN219880 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#238"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00238] For method validateEntity arguments ClientQuotaEntity  entity|Map&lt;String ,String &gt;  validatedEntityMap"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#238"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00238] The argument entity is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#238"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00238] The argument validatedEntityMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00245] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00246] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.controller.ClientQuotaControlManager.validateEntity@POLYN220309 the MagicNumber/String  'Invalid empty client quota entity' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.controller.ClientQuotaControlManager.validateEntity@POLYN220309 the MagicNumber/String  'Invalid client quota entity, duplicate entity entry ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.controller.ClientQuotaControlManager.validateEntity@POLYN220309 the MagicNumber/String  'Unhandled client quota entity type: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00260] In method org.apache.kafka.controller.ClientQuotaControlManager.validateEntity@POLYN220309 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method org.apache.kafka.controller.ClientQuotaControlManager.validateEntity@POLYN220309 the MagicNumber/String  'Empty ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method org.apache.kafka.controller.ClientQuotaControlManager.validateEntity@POLYN220309 the MagicNumber/String  ' not supported' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00268] The class ClientQuotaControlIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00289] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00290] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00297"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method org.apache.kafka.controller.ClientQuotaControlManager.ClientQuotaControlIterator.next@POLYN222938 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClientQuotaControlManager.java.html#305"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00305] For method iterator arguments long  epoch"
}} 
]
};
console.log('leListeStr 99 main end');
